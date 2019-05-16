/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/redux';
import '@ionic/core';
import 'ionicons';


export namespace Components {

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface LazyloadImg {
    'alt': string;
    'src': string;
  }
  interface LazyloadImgAttributes extends StencilHTMLAttributes {
    'alt'?: string;
    'src'?: string;
  }

  interface PsGallery {}
  interface PsGalleryAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AppRoot': Components.AppRoot;
    'LazyloadImg': Components.LazyloadImg;
    'PsGallery': Components.PsGallery;
  }

  interface StencilIntrinsicElements {
    'app-root': Components.AppRootAttributes;
    'lazyload-img': Components.LazyloadImgAttributes;
    'ps-gallery': Components.PsGalleryAttributes;
  }


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLLazyloadImgElement extends Components.LazyloadImg, HTMLStencilElement {}
  var HTMLLazyloadImgElement: {
    prototype: HTMLLazyloadImgElement;
    new (): HTMLLazyloadImgElement;
  };

  interface HTMLPsGalleryElement extends Components.PsGallery, HTMLStencilElement {}
  var HTMLPsGalleryElement: {
    prototype: HTMLPsGalleryElement;
    new (): HTMLPsGalleryElement;
  };

  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement
    'lazyload-img': HTMLLazyloadImgElement
    'ps-gallery': HTMLPsGalleryElement
  }

  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'lazyload-img': HTMLLazyloadImgElement;
    'ps-gallery': HTMLPsGalleryElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
