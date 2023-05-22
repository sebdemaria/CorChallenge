import PropTypes from "prop-types";

import { ErrorMessage, useField } from "formik";

import styles from "styles/componentStyles/Form/Input.module.scss";

export const TextArea = ({
    type = "text",
    name = "default",
    disabled = false,
    customClass = "",
    ...props
}) => {
    const [field, meta] = useField(name);

    return (
        <span className={styles.inputSpan}>
            <textarea
                disabled={disabled}
                className={`${styles[customClass]} ${styles.input} ${
                    meta.error && meta.touched && styles.errorField
                }`}
                type={type}
                name={name}
                {...field}
                {...props}
            />
            <ErrorMessage
                name={name}
                component={"p"}
                className={styles.errorMessage}
            />
        </span>
    );
};

TextArea.propTypes = {
    type: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    customClass: PropTypes.string,
    props: PropTypes.string,
};
