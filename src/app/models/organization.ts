export interface Organization{
    id: string;
    name: string;
    image: Blob;
    endpoint?: string;
    imageUrl?: string;
    passwordBroker?: string;
    usernameBroker?: string;
}