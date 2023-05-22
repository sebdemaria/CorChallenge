import PropTypes from "prop-types";

import styles from "styles/UIStyles/Button.module.scss";

export const Button = ({
    children,
    customClass = "",
    disabled = false,
    type = "button",
    ...props
}) => {
    return (
        <button
            role="button"
            className={`${styles[customClass]} ${styles.btn}`}
            type={type}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    props: PropTypes.string,
};
