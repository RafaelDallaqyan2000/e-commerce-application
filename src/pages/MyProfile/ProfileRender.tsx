import './profileStyles.css'
import React from "react";
import {UserType} from "../../models/models";
import defaultProfileImage from "../../images/profileImage.jpg";

type ProfileType = {
    userData: UserType;
    handleChangeUserData: () => {};
    handleSubmit: () => {};
}

export function ProfileRender({
    userData,
    handleChangeUserData,
    handleSubmit
}: ProfileType) {

    const {firstName, lastName, phoneNumber, email, imageUrl} = userData;

    return (
        <div className="profileContainer">
            <div className="container">
                <h1>Your Profile</h1>
                <img
                    className="profile-image"
                    src={imageUrl || defaultProfileImage}
                    alt="Admin Profile Image"
                />
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
                <form id="profileForm" onSubmit={handleSubmit}>
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
    )
}
