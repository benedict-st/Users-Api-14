import React from "react";
import { useQualities } from "../../../hooks/useQualities";
import PropTypes from "prop-types";
import Quality from "./quality";

const QualitiesList = ({ qualities }) => {
    const { isLoading, getQuality } = useQualities();
    const qualitiListRender = [];
    qualities.forEach((item) => {
        qualitiListRender.push(getQuality(item));
    });
    if (!isLoading) {
        return (
            <>
                {qualitiListRender.map((qual) => (
                    <Quality key={qual._id} {...qual} />
                ))}
            </>
        );
    } else return "Loading...";
};
QualitiesList.propTypes = {
    qualities: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default QualitiesList;
