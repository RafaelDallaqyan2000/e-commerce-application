import './profileStyles.css'
import React from "react";
import {UserType} from "../../models/models";
import defaultProfileImage from "../../images/profileImage.jpg";

type ProfileType = {
    userData: UserType;
    handleChangeUserData: (e: any) => any;
    handleSubmit: (e: any) => any;
}

export function ProfileRender({
    userData,
    handleChangeUserData,
    handleSubmit
}: ProfileType) {

    if(!userData) {
        return <h1>Can`t render user data</h1>;
    }

    const {
        firstName,
        lastName,
        phoneNumber,
        email,
        imageUrl
    } = userData;


    return (
        <>
            <h1 className="pageTitle">Your Profile</h1>
            <div className="profileContainer">
                <div className="container">
                    <img
                        className="profile-image"
                        src={imageUrl || defaultProfileImage}
                        alt="Admin Profile Image"
                    />
                    <h1
                        style={{
                            marginBottom: "30px",
                            borderBottom: "3px solid #2980b9"
                        }}
                    >
                        {`${firstName} ${lastName}`}
                    </h1>

                    <label htmlFor="profileImage">Imge Url:</label>
                    <input
                        type="text"
                        id="profileImage"
                        name="imageUrl"
                        value={imageUrl}
                        onChange={handleChangeUserData}
                        onFocus={e => e.target.select()}
                        required
                    />
                    <form
                        id="profileForm"
                        className="profileForm"
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={handleChangeUserData}
                            required
                        />

                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={handleChangeUserData}
                            required
                        />

                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChangeUserData}
                            required
                        />

                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={handleChangeUserData}
                            maxLength={10}
                            required
                        />

                        <button type='submit'>Save changes</button>
                    </form>
                </div>
            </div>
        </>
    )
}
