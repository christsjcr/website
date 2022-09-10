/// <reference types="@sveltejs/kit" />
declare interface Window {
    dataLayer: {
        push: (object: object) => void;
    };
}  