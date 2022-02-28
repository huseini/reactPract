import React, { Fragment } from "react";

const RenderArray = (props) => {
    const {ar} = props;
    let tableTR = '';

    return (
        <Fragment>
            <table>
                <tbody>
                    {    ar.map(element => {
                        return (<tr key={element.id}>
                            <td>
                                {element.id}
                            </td>
                            <td>
                                {element.fname}
                            </td>
                            <td>
                                {element.lname}
                            </td>
                            <td>
                                {element.birthYear}
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </Fragment>
    )
}

export default RenderArray;