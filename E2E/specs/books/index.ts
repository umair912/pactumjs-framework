import { handler } from "pactum";
const { addSpecHandler } = handler;

const getBooks = "getBooks";
const addBookList = "addBookList";
const deleteBooks = "deleteBooks";
const getBookById = "getBookById";
const deleteBook = "deleteBook";
const updateBookById = "updateBookById";

export const bookSpecs = {
    getBooks,
    addBookList,
    deleteBooks,
    getBookById,
    deleteBook,
    updateBookById
};

addSpecHandler(getBooks, (ctx) => {
  const { spec, data } = ctx;
  const { status } = data;
  spec.get("/BookStore/v1/Books");
  spec.expectStatus(status);
});

addSpecHandler(addBookList, (ctx) => {
  const { spec, data } = ctx;
  const { status, body } = data;
  spec.post("/BookStore/v1/Books");
  spec.withBody(body);
  spec.expectStatus(status);
});

addSpecHandler(deleteBooks, (ctx) => {
  const { spec, data } = ctx;
  const { status, id } = data;
  spec.delete("/BookStore/v1/Books");
  spec.withQueryParams(id);
  spec.expectStatus(status);
});

addSpecHandler(getBookById, (ctx) => {
  const { spec, data } = ctx;
  const { status, id } = data;
  spec.get("/BookStore/v1/Book");
  spec.withQueryParams(id);
  spec.expectStatus(status);
});

addSpecHandler(deleteBook, (ctx) => {
  const { spec, data } = ctx;
  const { status, body } = data;
  spec.delete("/BookStore/v1/Book");
  spec.withBody(body);
  spec.expectStatus(status);
});

addSpecHandler(updateBookById, (ctx) => {
  const { spec, data } = ctx;
  const { status, body, id } = data;
  spec.put("BookStore/v1/Books/{ISBN}");
  spec.withBody(body);
  spec.withPathParams("ISBN", id);
  spec.expectStatus(status);
});