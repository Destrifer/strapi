import type { Struct, Schema } from '@strapi/strapi';

export interface QuantityQuantity extends Struct.ComponentSchema {
  collectionName: 'components_quantity_quantities';
  info: {
    displayName: 'Quantity';
  };
  attributes: {
    Quantity: Schema.Attribute.Integer;
    Price: Schema.Attribute.Integer;
  };
}

export interface LaminationLaminacziya extends Struct.ComponentSchema {
  collectionName: 'components_lamination_laminacziya';
  info: {
    displayName: '\u041B\u0430\u043C\u0438\u043D\u0430\u0446\u0438\u044F';
  };
  attributes: {
    type: Schema.Attribute.Enumeration<
      [
        '\u041E\u0434\u0438\u043D\u0430\u0440\u043D\u0430\u044F',
        '\u0414\u0432\u043E\u0439\u043D\u0430\u044F',
      ]
    >;
    coefficient: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'quantity.quantity': QuantityQuantity;
      'lamination.laminacziya': LaminationLaminacziya;
    }
  }
}
