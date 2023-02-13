import React from "react";
import { CustomPicker } from "react-color";
import {
    EditableInput
    , Hue
    , Saturation
} from "react-color/lib/components/common";

export const MyPicker = ({ hex, hsl, hsv, onChange }) => {
    //const CustomPicker = ({ hex, hsl, hsv, onChange }) => {
    const styles = {
        hue: {
            height: 100,
            position: "relative",
            marginBottom: 40
        },
        saturation: {
            width: 200,
            height: 200,
            position: "relative"
        },
        input: {
            height: 35,
            border: `1px solid ${hex}`,
            paddingLeft: 30
        },
        swatch: {
            width: 60,
            height: 40,
            background: hex
        }
    };
    return (
        <div>
            <div style={styles.hue}>
                <Hue hsl={hsl} onChange={onChange} />
            </div>
            <div style={styles.saturation}>
                <Saturation hsl={hsl} hsv={hsv} onChange={onChange} />
            </div>
            <div style={{ display: "flex" }}>
                <EditableInput
                    style={{ input: styles.input }}
                    value={hex}
                    onChange={onChange}
                />
                <div style={styles.swatch} />
            </div>
        </div>
    );
};
export default CustomPicker(MyPicker);