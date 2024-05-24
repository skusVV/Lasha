const { readFileSync, writeFile } = require("fs");
// const users = require("../users/users");

const readCarAttributes = () => {
  const data = readFileSync("./car-attributes/car-attributes.json");

  return JSON.parse(data);
};

const writeAttributes = (attributes) => {
  writeFile("./car-attributes/car-attributes.json", JSON.stringify(attributes), (err) => {
    if (err) {
      console.log("Failed to write updated data to file");
      return;
    }
    console.log("Updated file successfully");
  });
};

const carAttributesRouter = (app) => {


  app.get("/api/car-attributes/engine-capacity", (req, res) => {
    const attributes = readCarAttributes();

    return res.send(attributes['engine-capacity']);
  });

  app.post("/api/car-attributes/engine-capacity", (req, res) => {
    const { body } = req;
    const attributes = readCarAttributes();
    const newAttributes = {
        ...attributes,
        'engine-capacity': [
            ...attributes['engine-capacity'],
            {
                id: attributes['engine-capacity'].length + 1,
                name: body.value,
                selected: false
            }
        ]
    }
    writeAttributes(newAttributes)

    return res.send(newAttributes['engine-capacity']);
  });

  app.delete("/api/car-attributes/engine-capacity/:id", (req, res) => {
    const { body } = req;
    const attributeId = Number(req.params.id);
    const attributes = readCarAttributes();


    const newAttributes = {
        ...attributes,
        'engine-capacity': attributes['engine-capacity'].filter(item => item.id !== attributeId)
    }
    writeAttributes(newAttributes)

    return res.send(newAttributes['engine-capacity']);
  });



  app.get("/api/car-attributes/locations", (req, res) => {
    const attributes = readCarAttributes();

    return res.send(attributes['locations']);
  });

  app.post("/api/car-attributes/locations", (req, res) => {
    const { body } = req;
    const attributes = readCarAttributes();
    const newAttributes = {
        ...attributes,
        'locations': [
            ...attributes['locations'],
            {
                id: attributes['locations'].length + 1,
                name: body.value,
                selected: false
            }
        ]
    }
    writeAttributes(newAttributes)

    return res.send(newAttributes['locations']);
  });

  app.delete("/api/car-attributes/locations/:id", (req, res) => {
    const { body } = req;
    const attributeId = Number(req.params.id);
    const attributes = readCarAttributes();


    const newAttributes = {
        ...attributes,
        'locations': attributes['locations'].filter(item => item.id !== attributeId)
    }
    writeAttributes(newAttributes)

    return res.send(newAttributes['locations']);
  });


};

module.exports = { carAttributesRouter };
