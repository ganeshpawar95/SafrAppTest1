const loginFields = [
  {
    label: "Hotel",
    name: "hotel_name",
    placeholder: "Enter  Hotel Name",
    icons: null,
    left_icon: null,
    rules: {
      required: "Hotel Name is required",
      minLength: {
        value: 2,
        message: "Hotel Name should be minimum 2 characters",
      },
    },
  },
  {
    label: "Location",
    name: "location_name",
    placeholder: "Enter Hotel Location",
    icons: null,
    left_icon: null,
    rules: {
      required: "Hotel Location is required",
      minLength: {
        value: 2,
        message: "Hotel Location should be minimum 2 characters",
      },
    },
  },
];

export default { loginFields };
