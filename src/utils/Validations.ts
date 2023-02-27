var EmailRegEx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var UserNameRegEx = /^[a-zA-Z ]{0,60}$/;
var NumericNumberRegEx = /^[0-9]{0,20}$/;
var NumericResultRegEx = /^(\d{0,2}(\.\d{1,2})?|100(\.00?)?)$/;
var NameRegEx = /^[a-zA-Z0-9 \s()-]{2,60}$/;
var NumberRegEx = /^[0]?[789]\d{9}$/;
var IndNumberRegEx = /^((\+91)?|91)?[789][0-9]{9}/;
var FoodLicenseRegEx = /^[0-9]{5,10}$/;
var DrugLicenseRegEx = /^[0-9]{5,10}$/;
var PincodeRegEx = /^\d{6}$/;
var AddressRegEx = /^[a-zA-Z0-9\s,'-]*$/;
var LatLngRegEx = /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}/;
var GstRegEx = /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/;
var CountryRegEx = "India";
var UUIDRegEx =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/;
var strongPassword =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,16}$/;

export const validateEmail = (email: any) => {
  return EmailRegEx.test(String(email).toLowerCase());
};
export const numberDataTypeValidation = (str: any) => {
  return typeof str === "number";
};
export const nameValidation = (str: any) => {
  return NameRegEx.test(String(str).trim());
};
export const UserNameValidation = (str: any) => {
  return UserNameRegEx.test(String(str).trim());
};
export const MobileNumberValidation = (str: any) => {
  return NumberRegEx.test(str);
};
export const NumberValidation = (str: any) => {
  return NumericNumberRegEx.test(str);
};
export const NumberValidationWithReturn = (str: any) => {
  return NumericNumberRegEx.test(str) ? str : "";
};
export const ResultValidation = (str: any) => {
  return NumericResultRegEx.test(str);
};
export const MobileNumberWithInValidation = (str: any) => {
  return IndNumberRegEx.test(str);
};
export const FoodLicenseValidation = (str: any) => {
  // return FoodLicenseRegEx.test(str);
  return str;
};
export const DrugLicenseValidation = (str: any) => {
  // return DrugLicenseRegEx.test(str);
  return str;
};
export const GstValidation = (str: any) => {
  return GstRegEx.test(str);
};
export const AddressValidation = (str: any) => {
  // return (String(str).length > 10) ? AddressRegEx.test(str) : false
  return String(str).trim().length > 10 ? str : false;
};
export const PincodeValidation = (str: any) => {
  return PincodeRegEx.test(str);

};
export const LatLngValidation = (str: any) => {
  return LatLngRegEx.test(str);
};
export const CountryValidation = (str: any) => {
  return str === CountryRegEx;
};
export const UuidValidation = (str: any) => {
  return UUIDRegEx.test(str);
};

export const StringValidation = (str: any) => {
  return typeof str === "undefined"
    ? false
    : String(str).trim().length >= 3
      ? nameValidation(str)
      : false;
};
export const ObjectValidation = (str: any) => {
  return typeof str === "object";
};
export const LengthValidation = (str: any, length: any) => {
  return String(str).trim().length > length;
};
export const capitalizeFirstLetter = (string: any) => {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else {
    return `_`;
  }
};
export const strongPasswordValidation = (str: any) => {
  return strongPassword.test(str);
};
export const numberWithCommas = (x: number) => {
  var parts = x.toFixed(2).toString()
  parts = parts.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return parts
}
