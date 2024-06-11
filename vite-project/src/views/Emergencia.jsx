
import React from 'react';
import "../components/PagNavFooter/lineasEmergencia/numerosimportantes.css"
import EmergencyNumbersSection from '../components/PagNavFooter/lineasEmergencia/EmergencyNumbersSection';
import CardSection from '../components/PagNavFooter/lineasEmergencia/CardSection';
import ContactForm from '../components/PagNavFooter/lineasEmergencia/ContactForm';

const Emergencia = () => {
    return (
        <div>
         
            <EmergencyNumbersSection />
            <CardSection />
            <ContactForm />
           
        </div>
    );
};

export default Emergencia;
