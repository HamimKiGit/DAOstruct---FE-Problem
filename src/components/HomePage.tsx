import React from 'react'
import { Breadcrumb, Layout, Menu, Spin, Space, Col, Row, Image, Typography } from 'antd';
import ApiService from '../utils/ApiService';
import { PlanetaryResponse } from '../context/interfaces';

const { Header, Content, Footer, Sider } = Layout;

const { Title, Paragraph, Text, Link } = Typography;

const HomePage = () => {

    const [state, setState] = React.useState<Array<PlanetaryResponse>>([])
    const [ellipsis, setEllipsis] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const uRLSearchParams = new URLSearchParams()

    const initialise = async () => {
        uRLSearchParams.set("api_key", "gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7")
        uRLSearchParams.set("start_date", "2022-10-01")
        uRLSearchParams.set("end_date", "2022-10-29")
        uRLSearchParams.set("thumbs", "true")
        setLoading(true)
        try {
            const apiRes = await ApiService.Planetary.apod(uRLSearchParams.toString())
            setState(apiRes)
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() => {
        initialise()
    }, [])

    return <Content style={{ margin: '0 16px' }}>
        <Spin spinning={loading}>
            <Row>
                {(state.length !== 0) &&
                    <>
                        <Col span={12}>
                            <Row gutter={[5, 5]}  >
                                <Space direction='vertical'>
                                    <Title level={5}>Title</Title>
                                    <Paragraph >
                                        {state[0].title}
                                    </Paragraph>
                                    <Title level={5}>Description</Title>
                                    <Paragraph ellipsis={ellipsis ? { rows: 2, expandable: true, symbol: 'more' } : false}>
                                        {state[0].explanation}
                                    </Paragraph>
                                    <Title level={5}>Author</Title>
                                    <Paragraph ellipsis={ellipsis ? { rows: 2, expandable: true, symbol: 'more' } : false}>
                                        {state[0].copyright}
                                    </Paragraph>
                                </Space>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Image
                                src={state[0].hdurl}
                            />
                        </Col>
                    </>}
            </Row>
        </Spin>
    </Content>
}
export default HomePage