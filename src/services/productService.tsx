
import { ProductCoreType } from "src/models/product/ProductModel";
import apiproduct from "src/utils/apiProductUtils";

const API_BASE_URL = "/v1/products";

const findProducts = async (): Promise<{ product: ProductCoreType[] }> => {
  const result = await apiproduct.get(`${API_BASE_URL}/product`);
  return result.data;
};

const collectionService = {
  findProducts,
};

export default collectionService;
