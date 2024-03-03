import { create } from "zustand";

const useCardStore = create((set) => ({
  cards: [
    {
      id: 1,
      title: "PetPals Pet Sitting Services",
      href: "#",
      phone: "+1 (555) 777-8888",
      address: "123 Pawprint Lane, Furryville, USA",
      cardNumber: "0000546",
      description:
        "PetPals Pet Sitting Services is a trusted and reliable pet care provider located in the charming community of Furryville. We offer professional pet sitting and dog walking services designed to give pet owners peace of mind while they're away. Whether you have dogs, cats, birds, or small animals, PetPals Pet Sitting Services is committed to providing top-notch care and companionship for your furry family members. Contact us today to schedule your pet sitting appointment and experience the peace of mind that comes with knowing your pets are in good hands.",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
    },
    {
      id: 2,
      title: "GreenThumb Garden Center ",
      href: "#",
      phone: "+1 (555) 321-9876",
      address: "789 Springdale Avenue, Bloomington, USA",
      cardNumber: "0000792",
      description:
        "GreenThumb Garden Center is a haven for gardening enthuasisasts located in the picturesque town of Bloomington! Our garden center offers a wide selection of plants, flowers, trees, and gardening supplies to help you cultivate the garden of your dreams. In addition to our extensive plant offerings, we also carry a variety of tools, soil, and accessories to help make the perfect garden!",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
    },
    {
      id: 3,
      title: "Freshbrew Cafe",
      href: "#",
      phone: "+1 (555) 123-4567",
      address: "123 Main Street, Cityville, USA",
      cardNumber: "0000411",
      description:
        "FreshBrew Cafe is a cozy and inviting coffeehouse located in the heart of Cityville. We specialize in serving freshly brewed coffee sourced from the finest beans around the world. Our menu features a wide variety of coffee beverages, from classic espressos to unique speciality drinks rafted by our skilled baristas! At Freshbrew Cafe, we're committed to providing a warm and welcoming where our customers can enjoy premium coffees and irresistible treats!",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
    },
  ],
  favouriteCards: [],
  addCard: (card) => set((state) => ({ cards: [...state.cards, card] })),
  editCard: (id, card) =>
    set((state) => ({
      cards: state.cards.map((c) => (c.id === id ? card : c)),
    })),
  getCard: (id) => set((state) => state.cards.find((c) => c.id === id)),
  deleteCard: (id) =>
    set((state) => ({ cards: state.cards.filter((c) => c.id !== id) })),
  toggleFavourite: (id) =>
    set((state) => {
      if (state.favouriteCards.includes(id)) {
        return {
          favouriteCards: state.favouriteCards.filter((c) => c !== id),
        };
      }
      return { favouriteCards: [...state.favouriteCards, id] };
    }),
}));

export default useCardStore;
