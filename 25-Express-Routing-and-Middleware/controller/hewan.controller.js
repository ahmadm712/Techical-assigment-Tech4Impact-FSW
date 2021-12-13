const hewan = [
  { id: 1, nama: "Snowy", spesies: "kucing" },
  { id: 2, nama: "Blacki", spesies: "anjing" },
  { id: 3, nama: "Molly", spesies: "kucing" },
  { id: 4, nama: "Milo", spesies: "kelinci" },
  { id: 5, nama: "Rere", spesies: "kucing" },
];

exports.getAllHewan = (req, res) => {
  try {
    res.status(200).json({
      msg: "Success Get All Data",
      hewan: hewan,
    });
  } catch (error) {
    res.status(500).send({
      msg: error,
    });
  }
};

exports.getHewanByID = (req, res) => {
  try {
    const idHewan = req.params.id;
    const search = hewan.find((res) => res.id === Number(idHewan));

    if (search) {
      res.status(200).json({
        msg: "Success Get Data",
        hewan: search,
      });
    } else {
      res.status(404).json({
        msg: `Data with id ${idHewan} not found`,
      });
    }
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

exports.createNewHewan = (req, res) => {
  const body = req.body;
  const idNew = hewan[hewan.length - 1].id + 1;

  const hewanBaru = {
    id: idNew,
    nama: body.nama,
    spesies: body.spesies,
  };

  hewan.push(hewanBaru);
  res.status(201).json({
    msg: "success adding one pet",
    hewan: hewan,
  });
};

exports.updateHewan = (req, res) => {
  const idHewan = req.params.id;
  const body = req.body;
  const index = hewan.findIndex((item) => item.id === Number(idHewan));

  if (index !== -1) {
    hewan[index].nama = body.nama || hewan[index].nama;
    hewan[index].spesies = body.spesies || hewan[index].spesies;

    res.status(200).send({
      msg: "success update Data pet",
    });
  } else {
    res.status(404).send({ msg: "Data not found" });
  }
};

exports.deleteHewan = (req, res) => {
  const index = hewan.findIndex((res) => res.id === Number(req.params.id));

  if (index !== -1) {
    hewan.splice(index, 1);

    res.status(200).json({
      msg: "success delete Data pet",
      hewan: hewan,
    });
  } else {
    res.status(404).send({ msg: "Data not found" });
  }
};
