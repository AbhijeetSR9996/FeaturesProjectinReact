import React, { useState } from "react";
//import { FaLeft, FaRight } from '../components/Navbar/NavbarElements';
import ToggleSwitch from "./ToggleSwitch";

const Modal = () => {
    const [showModal, setShowModal] = useState(false);
    const [activeObject, setActiveObject] = useState(null);
    let [newsletter, setNewsletter] = useState(false);
    let [daily, setDaily] = useState(false);

    function getClass(index) {
        return index === activeObject?.id ? "active" : "inactive";
    }

    const onNewsletterChange = (checked) => {
        setNewsletter(checked);
        if (!checked) {
            setDaily(false);
        }
    };

    const Modal = () => (
        <div id="productModal" className="active" style={{
            position: 'fixed',
            background: 'red',
            height: 240,
            width: 140,
            top: '40%',
            left: '35%',
            borderRadius: '3%',
            textAlign: 'left',
            justifyContent: 'center',
            padding: '2%',
        }}>
            <h3 style={{ fontSize: 30, fontWeight: '900', color: 'brown', fontFamily: 'sans-serif', marginBottom: -25, marginTop: -5 }}>60</h3>
            <h5 style={{ color: 'brown', marginBottom: -15, fontSize: 12 }}>minutes</h5>
            <h2 style={{ fontSize: 35, color: 'yellow', fontFamily: 'sans-serif', fontWeight: '500' }}>$109</h2>
            <h5 style={{ color: 'lightgrey', marginBottom: 5, marginTop: -15, fontWeight: '900', fontFamily: 'serif' }}>Enjoy one hour of full-body relaxation, perfect for massage beginners and experts alike.</h5><br />
            <center><button onClick={() => setShowModal(false)} style={{ cursor: 'pointer', background: 'yellow', borderRadius: 15, bottom: 100, color: 'red', width: 110, height: 30, border: 'none', fontWeight: '700', }}>Book now</button></center>
        </div>
    );

    return (
        <>
            <h2 style={{ margin: 100, fontFamily: 'fantasy', letterSpacing: 1.027 }}>Subscription</h2>
            <ToggleSwitch
                id="daily"
                small
                checked={daily}
                onChange={setDaily}
                width={500}
            />
         
            <div id="productModal" className="active" style={{
                position: 'fixed',
                background: 'white',
                height: 170,
                width: 140,
                top: '45%',
                left: '21%',
                borderRadius: '3%',
                textAlign: 'left',
                justifyContent: 'center',
                padding: '2%',
                cursor: 'pointer',
            }}
                onClick={() => {
                    setShowModal(true);
                }}
            >
                <h3 style={{ fontSize: 30, fontWeight: '900', color: 'lightgray', fontFamily: 'sans-serif', marginBottom: -25, marginTop: -10 }}>30</h3>
                <h5 style={{ color: 'lightgray', marginBottom: -15, fontSize: 12 }}>minutes</h5>
                <h2 style={{ fontSize: 35, fontFamily: 'sans-serif', fontWeight: '500' }}>$49</h2>
                <h5 style={{ marginBottom: 40, marginTop: -15, fontWeight: '900', fontFamily: 'serif' }}>Enjoy one hour of full-body relaxation, perfect for massage beginners and experts alike.</h5><br />
            </div>

            <div id="productModal" className="active" style={{
                position: 'fixed',
                background: 'white',
                height: 170,
                width: 140,
                top: '45%',
                left: '35%',
                borderRadius: '3%',
                textAlign: 'left',
                justifyContent: 'center',
                padding: '2%',
                cursor: 'pointer'
            }}
                onClick={() => {
                    setShowModal(true);
                }}
            >
                <h3 style={{ fontSize: 30, fontWeight: '900', color: 'lightgrey', fontFamily: 'sans-serif', marginBottom: -25, marginTop: -10 }}>60</h3>
                <h5 style={{ color: 'lightgrey', marginBottom: -15, fontSize: 12 }}>minutes</h5>
                <h2 style={{ fontSize: 35, fontFamily: 'sans-serif', fontWeight: '500' }}>$109</h2>
                <h5 style={{ marginBottom: 40, marginTop: -15, fontWeight: '900', fontFamily: 'serif' }}>Enjoy one hour of full-body relaxation, perfect for massage beginners and experts alike.</h5><br />

            </div>

            <div id="productModal" className="active" style={{
                position: 'fixed',
                background: 'white',
                height: 170,
                width: 140,
                top: '45%',
                left: '49%',
                borderRadius: '3%',
                textAlign: 'left',
                justifyContent: 'center',
                padding: '2%',
                cursor: 'pointer',
            }}
            >
                <h3 style={{ fontSize: 30, fontWeight: '900', color: 'lightgray', fontFamily: 'sans-serif', marginBottom: -25, marginTop: -10 }}>90</h3>
                <h5 style={{ color: 'lightgray', marginBottom: -15, fontSize: 12 }}>minutes</h5>
                <h2 style={{ fontSize: 35, fontFamily: 'sans-serif', fontWeight: '500' }}>$159</h2>
                <h5 style={{ marginBottom: 40, marginTop: -15, fontWeight: '900', fontFamily: 'serif' }}>Enjoy one hour of full-body relaxation, perfect for massage beginners and experts alike.</h5><br />
            </div>

            <div id="productModal" className="active" style={{
                position: 'fixed',
                background: 'white',
                height: 170,
                width: 140,
                top: '45%',
                left: '63%',
                borderRadius: '3%',
                textAlign: 'left',
                justifyContent: 'center',
                padding: '2%',
                cursor: 'pointer',
               
            }}
            >
                <h3 style={{ fontSize: 30, fontWeight: '900', color: 'lightgray', fontFamily: 'sans-serif', marginBottom: -25, marginTop: -10, marginInlineStart: -3 }}>120</h3>
                <h5 style={{ color: 'lightgray', marginBottom: -15, fontSize: 12 }}>minutes</h5>
                <h2 style={{ fontSize: 35, fontFamily: 'sans-serif', fontWeight: '500' }}>$205</h2>
                <h5 style={{ marginBottom: 40, marginTop: -15, fontWeight: '900', fontFamily: 'serif' }}>Enjoy one hour of full-body relaxation, perfect for massage beginners and experts alike.</h5><br />
            </div>

            {showModal ? <Modal object={activeObject} /> : null}

        </>
    );
};

export default Modal;