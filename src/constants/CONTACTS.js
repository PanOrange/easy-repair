export const CONTACTS = {
    street: 'вул.Коцюбинського, 14,',
    city: 'Київ',
    postbox: '04053',
    address() {
        return this.street + ' ' + this.city + ' ' + this.postbox;
    },
    phone: '0 800 300 30 30',
};