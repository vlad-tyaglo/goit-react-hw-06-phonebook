import { ListContacts, ContactInfo, List } from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { deleteContact } from "redux/contactsSlice";

export const ContactsList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const deleteContactById = (contactId) => {
        dispatch(deleteContact(contactId));
  };

  const getFilteredContacts = () => {
    const normalisedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalisedFilter));
};

    const filteredContacts = getFilteredContacts();

    return (
        <List>{filteredContacts.map(({ id, name, number }) => (
            <ListContacts key={id}>
                <ContactInfo>{name}: {number}</ContactInfo>
                <button type="button" onClick={() => {deleteContactById(id)}}>Delete</button>
            </ListContacts>))}
        </List>
    )

}

