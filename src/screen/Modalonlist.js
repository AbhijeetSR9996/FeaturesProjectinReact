import React, { useState } from "react";

const productData = [
    { id: 1, label: "free templates" },
    { id: 2, label: "basic $10" },
    { id: 3, label: "premium $20" },
    { id: 4, label: "gold $100" },
];

const Modalonlist = () => {
    const [showModal, setShowModal] = useState(false);
    const [activeObject, setActiveObject] = useState(null);

    function getClass(index) {
        return index === activeObject?.id ? "active" : "inactive";
    }

    const Modal = () => (
        <div style={{ background: 'grey', }}>
            <div id="productModal" className="active" style={{
                position: 'fixed',
                background: '#31352e',
                height: 370,
                width: 630,
                top: '15%',
                left: '22%',
                borderRadius: '2%',
                textAlign: 'center',
                justifyContent: 'center',
                padding: '2%',
                marginLeft: '5%',
                alignItems: 'center',

            }}>
                <button onClick={() => setShowModal(false)} style={{ background: 'transparent', borderRadius: '50%', color: 'white', cursor: 'pointer', marginLeft: '100%', marginTop: -30, border: 'none', fontSize: 20 }}>X</button>
                <h2 style={{ color: 'white', marginTop: '-6%', fontFamily: 'sans-serif', fontSize: 30 }}>Upgrade to Designfist Pro</h2><br />


                <div id="productModal" style={{
                    background: '#9ff400',
                    height: 312,
                    width: 263,
                    marginTop: '1%',
                    marginLeft: '2%',
                    borderRadius: '3%',
                    textAlign: 'center',
                    justifyContent: 'center',
                    textAlign: 'left',
                    paddingLeft: 25,
                    paddingTop: 5
                }}>
                    <h2 style={{ fontFamily: 'sans-serif', marginBottom: -10, marginTop: 30 }}>Basic (per/day)</h2>
                    <h2 style={{ fontFamily: 'sans-serif', marginBottom: -5 }}>₹35</h2>
                    <p style={{ fontFamily: 'sans-serif', fontSize: 15, marginBottom: 5 }}>Access to free templates</p>
                    <p style={{ fontFamily: 'sans-serif', fontSize: 15, marginBottom: 5 }}>Transliteration</p>
                    <p style={{ fontFamily: 'sans-serif', fontSize: 15, marginBottom: 5 }}>Access to premium fonts</p>
                    <p style={{ fontFamily: 'sans-serif', fontSize: 15, marginBottom: 15 }}>Access to premium Graphics</p>
                    <button style={{ cursor: 'pointer', background: '#31352e', borderRadius: 15, bottom: 100, color: 'white', width: 160, height: 30, border: 'none', fontWeight: '700', elevation: 5 }}>Book now</button>
                </div>

                <div id="productModal" style={{
                    background: '#9ff400',
                    height: 311,
                    width: 263,
                    marginTop: '-51%',
                    marginLeft: '52%',
                    borderRadius: '3%',
                    textAlign: 'center',
                    justifyContent: 'center',
                    textAlign: 'left',
                    paddingLeft: 25,
                    paddingTop: 5
                }}>
                    <h2 style={{ fontFamily: 'sans-serif', marginBottom: -10, marginTop: 30 }}>Premium (per/month)</h2>
                    <h2 style={{ fontFamily: 'sans-serif', marginBottom: -5 }}>₹299</h2>
                    <p style={{ fontFamily: 'sans-serif', fontSize: 15, marginBottom: 5 }}>Access to free templates</p>
                    <p style={{ fontFamily: 'sans-serif', fontSize: 15, marginBottom: 5 }}>Transliteration</p>
                    <p style={{ fontFamily: 'sans-serif', fontSize: 15, marginBottom: 5 }}>Access to premium fonts</p>
                    <p style={{ fontFamily: 'sans-serif', fontSize: 15, marginBottom: 15 }}>Access to premium Graphics</p>
                    <button style={{ cursor: 'pointer', background: '#31352e', borderRadius: 15, bottom: 100, color: 'white', width: 160, height: 30, border: 'none', fontWeight: '700', elevation: 5 }}>Book now</button>
                </div>

            </div>
        </div>
    );

    return (
        <>
            <center><h2>SUBSCRIPTION PLANS</h2></center><br />
            <ul className="list-menu">
                {productData.map(({ id, label, description }) => (
                    <li
                        key={id}
                        onClick={() => {
                            setActiveObject({ id, label, description });
                            setShowModal(true);
                        }}
                        className={getClass(id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <h2>{label}</h2>
                    </li>
                ))}
            </ul>
            {showModal ? <Modal object={activeObject} /> : null}
        </>
    );
};

export default Modalonlist;