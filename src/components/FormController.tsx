import React, { Fragment } from "react";

import GlobalEx from "../utils/GlobalEx";
import CustomInput from "./CustomInputBox";

function FormController({
  label = null,
  name = "",
  placeholder = "",
  sub_placeholder = null,
  secureTextEntry = false,
  keyboardTypes = "default",
  control,
  rules = {},
  form_input_type = "text",
  formClass = "",
  left_icon = null,
  right_icon = null,
  checkbox_label = "",
  key_name = "",
}) {
  // Memoize class names for optimization
  const formControlClass = React.useMemo(
    () => (formClass.length ? `border-1 mb-3 ${formClass}` : "mt-2"),
    [formClass]
  );

  return (
    <GlobalEx.Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <GlobalEx.FormControl isInvalid={!!error}>
          {/* Label */}
          {form_input_type != "outlined" &&
            form_input_type != "radiobox" &&
            label && (
              <GlobalEx.FormControl.Label style={styles.InputLabel}>
                {label}
              </GlobalEx.FormControl.Label>
            )}
          {/* TextInputOutlineBox */}

          {form_input_type === "text" && (
            <CustomInput
              value={value}
              name={name}
              onChange={onChange}
              placeholder={placeholder}
              keyboardTypes={keyboardTypes}
              left_icon={left_icon}
              right_icon={right_icon}
              error={error}
            />
          )}

          {/* Error Message */}
          {error && (
            <GlobalEx.FormControl.ErrorMessage
              leftIcon={<GlobalEx.WarningOutlineIcon size="xs" />}
            >
              {error.message}
            </GlobalEx.FormControl.ErrorMessage>
          )}
        </GlobalEx.FormControl>
      )}
    />
  );
}

// Use React.memo to prevent unnecessary re-renders if props haven't changed
export default React.memo(FormController);

const styles = GlobalEx.StyleSheet.create({
  InputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    // color: "#000000",
  },
});
