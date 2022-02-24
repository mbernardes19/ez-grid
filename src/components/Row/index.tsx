import React from 'react';
import './styles.css';
import clsx from 'clsx';

export enum Alignment {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center'
}

export interface RowProps {
    className?: string
    align?: Alignment
    children?: any
}

const Row = (props: RowProps) => {
    const {align, className, children} = props;

    return (
        <div className={clsx('row', className && className, align && align)}>
            {children}
        </div>
    )
}

export default Row;

/**
 * Breakpoints
 * xs <576px
 * sm <= 576px
 * md >= 768px
 * lg >= 992px
 * xl >= 1200px
 * xxl >= 1400px
 */


{/* <Row>
    <Col md={3}></Col>
    <Col></Col>
</Row> */}