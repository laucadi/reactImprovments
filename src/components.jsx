import React, { forwardRef } from "react";
import ReactDOM from "react-dom";
import { cx, css } from "@emotion/css";

export const Button = forwardRef(
  ({ className, active, reversed, ...props }, ref) => (
    <span
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          cursor: pointer;
          color: ${reversed
            ? active
              ? "white"
              : "#aaa"
            : active
            ? "black"
            : "#ccc"};
        `
      )}
    />
  )
);
export const EditorValue = React.forwardRef(function EditorValue(props, ref) {
  const { className, value, children, ...rest } = props;
  const textLines = value.document.nodes
    .map((node) => node.text)
    .toArray()
    .join("\n");
  return (
    <div
      {...rest}
      ref={ref}
      className={cx(
        className,
        css`
          margin: 30px -20px 0;
        `
      )}
    >
      <div
        className={css`
          font-size: 14px;
          padding: 5px 20px;
          color: #404040;
          border-top: 2px solid #eeeeee;
          background: #f8f8f8;
        `}
      >
        Slate's value as text
      </div>
      <div
        className={css`
          color: #404040;
          font: 12px monospace;
          white-space: pre-wrap;
          padding: 10px 20px;
          div {
            margin: 0 0 0.5em;
          }
        `}
      >
        {textLines}
      </div>
    </div>
  );
});

export const Icon = React.forwardRef(({ className, ...props }, ref) => (
  <span
    {...props}
    ref={ref}
    className={cx(
      "material-icons",
      className,
      css`
        font-size: 18px;
        vertical-align: text-bottom;
      `
    )}
  />
));
export const Instruction = React.forwardRef((props, ref) => (
  <div
    {...props}
    ref={ref}
    className={cx(
      props.className,
      css`
        white-space: pre-wrap;
        margin: 0 -20px 10px;
        padding: 10px 20px;
        font-size: 14px;
        background: #f8f8e8;
      `
    )}
  />
));
export const Menu = React.forwardRef(({ className, ...props }, ref) => (
  <div
    {...props}
    data-test-id="menu"
    ref={ref}
    className={cx(
      className,
      css`
        & > * {
          display: inline-block;
        }
        & > * + * {
          margin-left: 15px;
        }
      `
    )}
  />
));

export const Portal = ({ children }) => {
  return typeof document === "object"
    ? ReactDOM.createPortal(children, document.body)
    : null;
};

export const Toolbar = forwardRef(function (props, ref) {
  const { className, ...otherProps } = props;
  return (
    <Menu
      {...otherProps}
      ref={ref}
      className={cx(
        className,
        `
            position: relative;
            padding: 1px 18px 17px;
            margin: 0 -20px;
            border-bottom: 2px solid #eee;
            margin-bottom: 20px;
          `
      )}
    />
  );
});
