import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCardStore from "../store/Card";
const CreateCard = () => {
  const addCard = useCardStore((state) => state.addCard);
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const length = useCardStore((state) => state.cards.length);
  const createCard = (e) => {
    e.preventDefault();
    // validate
    if (!title || !address || !phone || !cardNumber || !description) {
      return;
    }
    const card = {
      id: length + 1,
      title,
      address,
      phone,
      cardNumber,
      description,
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
    };
    addCard(card);
    navigate("/");
  };
  return (
    <div className="max-w-7xl h-[90vh] mx-auto py-24">
      <div className="py-8">
        <h1 className="text-3xl font-medium">Create Card</h1>
      </div>
      <form onSubmit={createCard} className="grid w-full grid-cols-2 gap-8">
        <div className="">
          <label className="block text-md" tmlFor="name">
            Title
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 mt-2 rounded-md"
            placeholder="Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="name"
            id="name"
          />
        </div>

        <div className="">
          <label className="block text-md" tmlFor="name">
            Address
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 mt-2 rounded-md"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Insert a Address here"
            name="name"
            id="name"
          />
        </div>
        <div className="">
          <label className="block text-md" htmlFor="name">
            Phone
          </label>
          <input
            type="tel"
            className="w-full px-3 py-2 mt-2 rounded-md"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1...."
            name="name"
            id="name"
          />
        </div>

        <div className="">
          <label className="block text-md" tmlFor="name">
            Card Number
          </label>
          <input
            type="number"
            className="w-full px-3 py-2 mt-2 rounded-md"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Insert a Phone Number here"
            name="name"
            id="name"
          />
        </div>

        <div className="col-span-2">
          <label className="block text-md" tmlFor="name">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="number"
            className="px-3 mt-2 min-h-[250px] w-full py-2 rounded-md"
            placeholder="Insert a Description Here"
            name="name"
            id="name"
          ></textarea>
        </div>

        <button
          type="submit"
          className="h-10 text-white bg-indigo-700 rounded-md w-36"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateCard;
