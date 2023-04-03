import  ContactForm  from "./Conacts/ContactForm";
import React from "react";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";

const App = () => {
  
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm></ContactForm>
        <h2>Contacts</h2>
        <Filter></Filter>
        <ContactsList></ContactsList>
      </div>
    );
};

export default App;