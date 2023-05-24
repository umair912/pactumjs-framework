import { handler } from "pactum";
const { addSpecHandler } = handler;

const accountAuthorize = "accountAuthorize";
const generateToken = "generateToken";
const createUserAccount = "createUserAccount";
const removeUserAccount = "removeUserAccount";
const getUserAccount = "getUserAccount";

export const accountSpecs = {
    accountAuthorize,
    generateToken,
    createUserAccount,
    removeUserAccount,
    getUserAccount
};

addSpecHandler(accountAuthorize, (ctx) => {
  const { spec, data } = ctx;
  const { status, body } = data;
  spec.post("/Account/v1/Authorized");
  spec.withBody(body);
  spec.expectStatus(status);
});

addSpecHandler(generateToken, (ctx) => {
  const { spec, data } = ctx;
  const { status, body } = data;
  spec.post("/Account/v1/GenerateToken");
  spec.withBody(body);
  spec.expectStatus(status);
});

addSpecHandler(createUserAccount, (ctx) => {
  const { spec, data } = ctx;
  const { status, body } = data;
  spec.post("/Account/v1/User");
  spec.withBody(body);
  spec.expectStatus(status);
});

addSpecHandler(removeUserAccount, (ctx) => {
  const { spec, data } = ctx;
  const { status, id } = data;
  spec.delete("/Account/v1/User/{UUID}");
  spec.withPathParams("UUID", id);
  spec.expectStatus(status);
});

addSpecHandler(getUserAccount, (ctx) => {
  const { spec, data } = ctx;
  const { status, id } = data;
  spec.get("/Account/v1/User/{UUID}");
  spec.withPathParams("UUID", id);
  spec.expectStatus(status);
});