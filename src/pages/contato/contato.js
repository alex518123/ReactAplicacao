import React from "react";
import Header from '../../components/header/header';
import "./styles.css";
import Footer from '../../components/footer/footer';
import ContactForm from '../../components/contactform/contactform';

const Contato = () => {
    return (
        <>
          <Header />
      
          <div className="contato-body">
            <div className="all">
              <div>
                <i>
                  <h1 className="coment">FALE CONOSCO</h1>
                </i>
              </div>
      
              <div className="imgbanner"></div>
      
              <ContactForm />
    
            </div>
          </div>
      
          <Footer />
        </>
      );
    }      

export default Contato;
