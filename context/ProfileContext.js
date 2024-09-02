import React, { createContext, useState, useContext } from 'react';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const [user, setUser] = useState('');
    const [phoneNumber, setNumber] = useState('');
    const [farmerProfile, setFarmerProfile] = useState({
        name: '',
        age: '',
        uniqueId: '',
        language: '',
        pincode: '140413',
        village: 'Gharuan',
        city: 'Mohali',
        state: 'Punjab'
    });

    const [consumerProfile, setConsumerProfile] = useState({
        name: '',
        number: '',
        language: '',
        preferences: '',
        location: '',
    });

    const [workerProfile, setWorkerProfile] = useState({
        name: '',
        number: '',
        language: '',
        skills: '',
        location: '',
    });

    return (
        <ProfileContext.Provider
            value={{
                farmerProfile,
                setFarmerProfile,
                consumerProfile,
                setConsumerProfile,
                workerProfile,
                setWorkerProfile,
                user, setUser, 
                phoneNumber, setNumber,
                language, setLanguage
            }}
        >
            {children}
        </ProfileContext.Provider>
    );
};

// Custom hook to use Profile Context
export const useProfile = () => useContext(ProfileContext);
