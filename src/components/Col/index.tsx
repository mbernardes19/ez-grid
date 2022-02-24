import React from 'react';
import './styles.css';
import clsx from 'clsx';

export interface ColProps {
    xs?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    xxl?: number
    className?: string
    children?: any
}

const Col = (props: ColProps) => {
    const {className, children} = props;
    const {xs, sm, md, lg, xl, xxl} = props;

    return (
        <div className={
            clsx(
                'col',
                className && className,
                xs && `xs-${xs}`,
                sm && `sm-${sm}`,
                md && `md-${md}`,
                lg && `lg-${lg}`,
                xl && `xl-${xl}`,
                xxl && `xxl-${xxl}`,
            )
        }>
            {children}
        </div>
    )
}

export default Col;