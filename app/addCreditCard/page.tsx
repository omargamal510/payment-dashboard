
'use client'
import React, { useState } from 'react';
import { useFormik } from 'formik';
import style from './page.module.css';
import * as Yup from 'yup';

export default function AddCreditCard() {
    let [imageSrc, setImageSrc] = useState<string>('visa');

    let [cardState, setCardState] = useState<number>(16)
    let [cvvState, setCvvState] = useState<number>(3)

    const validationSchema = Yup.object({
        cardNumber: Yup.string().min(cardState, `'Card Number should be ${cardState} Numbers'`).max(cardState, `Number is too long it cannot exceed ${cardState} letters`).required('Card Number is required'),
        cardHolder: Yup.string().min(3, 'Name must be more than 3 letters').max(16, "Name is too long it cannot exceed 16 letters").required('Card Holder Name is required'),
        cvv: Yup.string().required('CVV is required'),
        expireDate: Yup.string().required('Expire Date is required'),
    });

    // Define a TypeScript type 'cardData' to represent the structure of credit card data.
    // This type includes properties for card number, card holder name, CVV, and expiration date.
    type cardData = {
        cardNumber: string,     
        cardHolder: string,     
        cvv: string,          
        expireDate: string  
    };

    // Initialize 'initialValues' with an empty 'cardData' object.
    // This object is used as the initial values for a form, typically with a form library like Formik.
    const initialValues: cardData = {
        cardNumber: '',        
        cardHolder: '',         
        cvv: '',                
        expireDate: ''         
    };
    const formik = useFormik({
        initialValues: {
            ...initialValues, // Merge cardData with other initial values
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // This function is called when the form is submitted and valid
            console.log('Form data:', values);
        },
    });


    // This function, 'paymentMethod,' determines the type of credit card based on the first digit of the card number.
    function paymentMethod() {
        if (formik.values.cardNumber.charAt(0) === '3') {
            // If the first digit is '3,' it sets the 'imageSrc' to 'amex' for American Express.
            setImageSrc('amex');
        } else if (formik.values.cardNumber.charAt(0) === '4') {
            // If the first digit is '4,' it sets the 'imageSrc' to 'visa' for Visa cards.
            setImageSrc('visa');
        } else if (formik.values.cardNumber.charAt(0) === '5') {
            // If the first digit is '5,' it sets the 'imageSrc' to 'mastercard' for MasterCard.
            setImageSrc('mastercard');
        }
    }

    // This function, 'handleMaxLength,' adjusts the maximum lengths for the card number and CVV based on the card type.
    function handleMaxLength() {
        if (imageSrc === 'amex') {
            // If the card type is American Express (amex), set 'cardState' to 15 and 'cvvState' to 4.
            setCardState(15);
            setCvvState(4);
        } else {
            // For other card types, set 'cardState' to 16 (the default maximum card number length) and 'cvvState' to 3.
            setCardState(16);
            setCvvState(3);
        }
    }


    const handleCardNumberChange = (e: any) => {
        formik.handleChange(e); // Let Formik handle the input change
        paymentMethod(); // Update the card image
        handleMaxLength(); // Update cardState and cvvState
    };




    return (
        <div className="container pt-5">
            <div className={`${style.checkformrow} row d-flex align-items-center justify-content-center card p-4 m-5`}>
                <div className={`${style.checkform} col-12 col-md-8`}>
                    <form onSubmit={formik.handleSubmit}>
                        <h2 className='text-white'>
                            Checkout
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="ms-2 bi bi-credit-card text-success" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                            </svg>
                        </h2>
                        <div className="form-group mb-2">
                            <label htmlFor="cardNumber">Card Number</label>
                            <div className='d-flex'>
                                <input
                                    maxLength={cardState}
                                    type="text"
                                    className="form-control"
                                    id="cardNumber"
                                    name="cardNumber"
                                    placeholder="Enter Card Number"
                                    value={formik.values.cardNumber}
                                    onChange={handleCardNumberChange}
                                />
                                <img src={`/assets/${imageSrc}.svg`} className='ms-1' alt="Card Image" />
                            </div>
                            {formik.errors.cardNumber && formik.touched.cardNumber ? <div className="text-danger">{formik.errors.cardNumber}</div> : ''}
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="cardHolder">Card Holder Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="cardHolder"
                                name="cardHolder"
                                placeholder="Card Holder Name"
                                value={formik.values.cardHolder}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.cardHolder && formik.touched.cardHolder ?
                                <div className="text-danger">{formik.errors.cardHolder}</div> : ''}

                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group mb-2">
                                    <label htmlFor="cvv">CVV</label>
                                    <input
                                        maxLength={cvvState}
                                        type="text"
                                        className="form-control"
                                        id="cvv"
                                        name="cvv"
                                        placeholder="CVV"
                                        value={formik.values.cvv}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.cvv && formik.touched.cvv ?
                                        <div className="text-danger">{formik.errors.cvv}</div> : ''}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group mb-2">
                                    <label htmlFor="expireDate">Expire Date</label>
                                    <input
                                        maxLength={5}
                                        type="text"
                                        className="form-control"
                                        id="expireDate"
                                        name="expireDate"
                                        placeholder="Expire Date"
                                        value={formik.values.expireDate}
                                        onInput={(e) => {
                                            const input = e.target as HTMLInputElement;
                                            const value = input.value;
                                            if (value.length === 2 && !value.includes('/')) {
                                                input.value = value + '/';
                                                formik.setFieldValue('expireDate', value + '/');
                                            }
                                            formik.handleChange(e);
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Backspace' || e.key === 'Delete') {
                                                const input = e.target as HTMLInputElement;
                                                const value = input.value;
                                                if (value.length === 3 && value.endsWith('/')) {
                                                    input.value = value.slice(0, -1);
                                                    formik.setFieldValue('expireDate', value.slice(0, -1));
                                                }
                                            }
                                        }}
                                    />
                                    {formik.errors.expireDate && formik.touched.expireDate ?
                                        <div className="text-danger">{formik.errors.expireDate}</div> : ''}

                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
