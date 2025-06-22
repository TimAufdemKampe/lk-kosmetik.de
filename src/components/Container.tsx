import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
  withMarginTop?: boolean;
  withMarginBottom?: boolean;
}

export const Container: React.FC<Props> = (props) => {
  const { className = '', children, withMarginTop, withMarginBottom } = props;

  return (
    <div
      className={`mx-auto flex max-w-[1170px] flex-col ${withMarginTop ? 'mt-20' : ''} ${withMarginBottom ? 'mb-10' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
