import { Link } from "react-router-dom";
import useCardStore from "../store/Card";

export default function Cards() {
  const cards = useCardStore((state) => state.cards);
  const favouriteCards = useCardStore((state) => state.favouriteCards);
  const toggleFavourite = useCardStore((state) => state.toggleFavourite);
  const deleteCard = useCardStore((state) => state.deleteCard);
  const deleteCardFunc = (id) => {
    // deleteCard(1);
    // delete from favourite
    deleteCard(id);
    favouriteCards.map((card) => {
      if (card.id === id) {
        toggleFavourite(card);
      }
    });
  };
  console.log(favouriteCards);
  return (
    <div className="py-24 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl ">
          <h2 className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Ace of Cards Products
          </h2>
          <p className="mt-4 text-xl text-black dark:text-white">
          Here you can find the company alliances of Ace of Cards! Where everyone can make their own business cards, and have it represented on our site! It's very easy and simple, how about you have a try? Below are some examples:
          </p>
        </div>
        <div className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.id}
              className="relative flex flex-col items-start justify-between overflow-hidden bg-white rounded-md shadow-lg dark:bg-black"
            >
              <div className="relative w-full">
                <img
                  src={card.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full   bg-gray-100  object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl px-4">
                <div className="relative group">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600">
                    <Link to={`/edit-card/${card.id}`}>
                      <span className="absolute inset-0" />
                      {card.title}
                    </Link>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-100 line-clamp-3">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="px-4 my-4 text-black dark:text-white">
                <div className="">
                  <b>Address: </b> {card.address}
                </div>
                <div className="">
                  <b>Phone: </b> {card.phone}
                </div>
                <div className="">
                  <b>Card Number: </b> {card.cardNumber}
                </div>
              </div>

              <div className="flex w-full px-4 py-3 text-black border-t border-gray-300 dark:text-gray-500">
                <div className="flex items-center gap-4 ml-auto">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => toggleFavourite(card)}
                    className={`${
                      favouriteCards.find((c) => c.id === card.id)
                        ? "text-red-500"
                        : "text-gray-500"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => deleteCardFunc(card.id)}
                    className="text-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
