export type FieldConfig = {
  id: string;
  label: string;
  type: "text" | "number" | "select" | "date" | "email";
  placeholder?: string;
  options?: { label: string; value: string }[];
  required?: boolean;
};

export type ModalConfig = {
  title: string;
  fields: FieldConfig[];
  onSubmit: (data: Record<string, any>) => void;
};

export const modalConfigs: Record<string, ModalConfig> = {
  products: {
    title: "Product",
    fields: [
      { id: "title", label: "Product Name", type: "text", required: true },
      { id: "id", label: "Product ID", type: "text", required: true },
      { id: "price", label: "Price", type: "number", required: true },
      { id: "category", label: "Category", type: "text", required: true },
      { id: "description", label: "Description", type: "text" },
      { id: "image", label: "Image URL", type: "text" },
    ],
    onSubmit: (data) => {
      const productsData = {
        id: data.id,
        title: data.title,
        image: data.image,
        category: data.category,
        price: data.price,
        description: data.description,
      };

      console.log("Products data:", productsData);
    },
  },
  orders: {
    title: "Order",
    fields: [
      { id: "product", label: "Product", type: "text", required: true },
      {
        id: "orderValue",
        label: "Order Value",
        type: "number",
        required: true,
      },
      { id: "orderID", label: "Order ID", type: "text", required: true },
      { id: "quantity", label: "Quantity", type: "number", required: true },
      {
        id: "expectedDelivery",
        label: "Expected Delivery",
        type: "date",
        required: true,
      },
      {
        id: "status",
        label: "Status",
        type: "select",
        options: [
          { label: "Confirmed", value: "Confirmed" },
          { label: "Delayed", value: "Delayed" },
        ],
        required: true,
      },
    ],
    onSubmit: (data) => {
      const ordersData = {
        product: data.product,
        orderValue: data.orderValue,
        quantity: data.quantity,
        orderID: data.orderID,
        expectedDelivery: data.expectedDelivery,
        status: data.status,
      };
      console.log("Orders Data: ", ordersData);
    },
  },
  stores: {
    title: "Store",
    fields: [
      {
        id: "storeID",
        label: "Store ID",
        type: "text",
        required: true,
      },
      {
        id: "storeName",
        label: "Store Name",
        type: "text",
        required: true,
      },
      {
        id: "storeAddress",
        label: "Store Address",
        type: "text",
        required: true,
      },
      {
        id: "storePhone",
        label: "Store Phone",
        type: "text",
        required: true,
      },
    ],
    onSubmit: (data) => {
      const storesData = {
        id: data.storeID,
        name: data.storeName,
        address: data.storeAddress,
        phone: data.storePhone,
      };
      console.log("Store Data: ", storesData);
    },
  },
  suppliers: {
    title: "Supplier",
    fields: [
      {
        id: "id",
        label: "Supplier ID",
        type: "text",
        required: true,
      },
      {
        id: "firstname",
        label: "First Name",
        type: "text",
        required: true,
      },
      {
        id: "lastname",
        label: "Last Name",
        type: "text",
        required: true,
      },
      {
        id: "email",
        label: "Email",
        type: "email",
        required: true,
      },
      {
        id: "username",
        label: "Username",
        type: "text",
        required: true,
      },
      {
        id: "phone",
        label: "Phone",
        type: "text",
        required: true,
      },
      {
        id: "city",
        label: "City",
        type: "text",
        required: true,
      },
    ],
    onSubmit: (data) => {
      const supplierData = {
        id: data.id,
        name: {
          firstname: data.firstname,
          lastname: data.lastname,
        },
        email: data.email,
        username: data.username,
        phone: data.phone,
        address: {
          city: data.city,
        },
      };

      console.log("Supplier data:", supplierData);
    },
  },
};
