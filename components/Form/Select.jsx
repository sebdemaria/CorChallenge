import PropTypes from "prop-types";

import { ErrorMessage, useField } from "formik";

import styles from "styles/componentStyles/Form/Input.module.scss";

export const Select = ({
    type = "text",
    name = "default",
    disabled = false,
    customClass = "",
    helperText = "",
    children,
    ...props
}) => {
    const [field, meta] = useField(name);

    return (
        <span className={styles.selectContainer}>
            <label htmlFor={name} className={styles.label}>
                {helperText}
            </label>

            <select
                disabled={disabled}
                className={`${styles[customClass]} ${styles.input} ${
                    meta.error && meta.touched && styles.errorField
                }`}
                type={type}
                name={name}
                {...field}
                {...props}
            >
                <option value="">Seleccione una opción...</option>
                {children}
            </select>

            <ErrorMessage
                name={name}
                component={"p"}
                className={styles.errorMessage}
            />
        </span>
    );
};

Select.propTypes = {
    type: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    customClass: PropTypes.string,
    children: PropTypes.node.isRequired,
    props: PropTypes.string,
};
