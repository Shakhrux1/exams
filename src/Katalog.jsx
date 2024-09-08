import { useState, useEffect } from "react";


import ceti from "./img/Rectangle 22.png";
import ceti2 from "./img/Rectangle 22 (1).png";
import ceti3 from "./img/Rectangle 22 (4).png";
import ceti4 from "./img/Rectangle 22 (3).png";
import ceti5 from "./img2/Rectangle 223.png";
import ceti6 from "./img2/Rectangle 223 (1).png";
import ceti9 from "./img2/Rectangle 223 (2).png";
import ceti7 from "./img2/Rectangle 223 (3).png";
import ceti8 from "./img2/Rectangle 223 (4).png";
import ceti10 from "./img2/Rectangle 22 (5).png";
import ceti11 from "./img2/Rectangle 22 (6).png";
import ceti12 from "./img2/Rectangle 22 (7).png";
import ceti13 from "./img2/Rectangle 22 (8).png";
import ceti14 from "./img2/Rectangle 22 (9).png";
import ceti15 from "./img2/Rectangle 22 (10).png";
import ceti16 from "./img2/Rectangle 22 (11).png";
import ceti17 from "./img2/Rectangle 22 (12).png";
import ceti18 from "./img2/Rectangle 22 (13).png";
import ceti19 from "./img2/Rectangle 22 (14).png";
import ceti20 from "./img2/Rectangle 22 (15).png";

import yulduz from "./img/Vector.png";
import yulduzYon from "./icon/free-icon-star-616655.png";
import { Link } from "react-router-dom";

function KatalogPage() {
  const [yulduzlar, setYulduzlar] = useState(Array(20).fill(false));

  useEffect(() => {
    const savedYulduzlar = localStorage.getItem("yulduzlar");
    if (savedYulduzlar !== null) {
      setYulduzlar(JSON.parse(savedYulduzlar));
    }
  }, []);

  const handleClick = (index) => {
    const newYulduzlar = [...yulduzlar];
    newYulduzlar[index] = !newYulduzlar[index];
    setYulduzlar(newYulduzlar);
    localStorage.setItem("yulduzlar", JSON.stringify(newYulduzlar));
  };

  return (
    <>
        <div className="container">
      <div className="KatalogPage">
        <div className="flex">
          <article>
            <h1>Обувь</h1>
            <p>1 746 товаров</p>
          </article>
          <Link to="/account">Сортировать по От дешевых к дорогим &rarr; </Link>
        </div>
        <div className="gridContainer">
          {[
            {
              img: ceti,
              title: "Nikee Court Zoom Cage 2 ",
              price: "4 699 ₽",
              h2: "About The Goods",
              lorem:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
            },
            {
              img: ceti2,
              title: "Air Force 1 Ultra",
              price: "6 789 ₽",
              h2: "About The Goods",
              lorem:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
            },
            {
              img: ceti3,
              title: "Air Force 1 Ultra Flyknit",
              price: "3 198 ₽",
              h2: "About The Goods",
              lorem:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
            },
            {
              img: ceti4,
              title: "Men’s Soccer Shoes",
              price: "2 699 ₽",
              h2: "About The Goods",
              lorem:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
            },
            {
              img: ceti5,
              title: "Nikee Court Zoom Cage 2",
              price: "4 699 ₽",
              h2: "About The Goods",
              lorem:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
            },
            {
              img: ceti6,
              title: "Air Force 1 Ultra",
              price: "6 789 ₽",
              h2: "About The Goods",
              lorem:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
            },
            {
              img: ceti7,
              title: "Air Force 1 Ultra Flyknit",
              price: "3 198 ₽",
              h2: "About The Goods",
              lorem:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
            },
            {
              img: ceti8,
              title: "Men’s Soccer Shoes",
              price: "2 699 ₽",
              h2: "About The Goods",
              lorem:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
            },
            {
              img: ceti9,
              title: "Nikee Court Zoom Cage 2",
              price: "4 699 ₽",
              h2: "About The Goods",
              lorem:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
            },
            {
              img: ceti10,
              title: "Air Force 1 Ultra",
              price: "6 789 ₽",
              h2: "About The Goods",
              lorem:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
            },
            {
              img: ceti11,
              title: "Air Force 1 Ultra Flyknit",
              price: "3 198 ₽",
              h2: "About The Goods",
              lorem:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
            },
            {
              img: ceti12,
              title: "Men’s Soccer Shoes",
              price: "2 699 ₽",
              h2: "About The Goods",
              lorem:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
            },
            {
              img: ceti13,
              title: "Nikee Court Zoom Cage 2",
              price: "4 699 ₽",
              h2: "About The Goods",
              lorem:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
            },
            {
              img: ceti14,
              title: "Air Force 1 Ultra",
              price: "6 789 ₽",
              h2: "About The Goods",
              lorem:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
            },
            {
              img: ceti15,
              title: "Air Force 1 Ultra Flyknit",
              price: "3 198 ₽",
              h2: "About The Goods",
              lorem:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
            },
            {
              img: ceti16,
              title: "Nikee Court Zoom Cage 2",
              price: "4 699 ₽",
              h2: "About The Goods",
              lorem:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
            },
            {
              img: ceti17,
              title: "Air Force 1 Ultra",
              price: "6 789 ₽",
              h2: "About The Goods",
              lorem:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
            },
            {
              img: ceti18,
              title: "Air Force 1 Ultra Flyknit",
              price: "3 198 ₽",
              h2: "About The Goods",
              lorem:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
            },
            {
              img: ceti19,
              title: "Men’s Soccer Shoes",
              price: "2 699 ₽",
              h2: "About The Goods",
              lorem:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
            },
            {
              img: ceti20,
              title: "Air Force 1 Ultra Flyknit",
              price: "3 198 ₽",
              h2: "About The Goods",
              lorem:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
            },
            {
              img: ceti5,
              title: "Nikee Court Zoom Cage 2",
              price: "4 699 ₽",
              h2: "About The Goods",
              lorem:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
            },
            {
              img: ceti6,
              title: "Air Force 1 Ultra",
              price: "6 789 ₽",
              h2: "About The Goods",
              lorem:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
            },
            {
              img: ceti7,
              title: "Air Force 1 Ultra Flyknit",
              price: "3 198 ₽",
              h2: "About The Goods",
              lorem:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
            },
            {
              img: ceti8,
              title: "Men’s Soccer Shoes",
              price: "2 699 ₽",
              h2: "About The Goods",
              lorem:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
            },
          ].map((product, index) => (
            <div key={index} className="gridItem">
              <Link to="/obuv/krasovki">
                <div className="relative">
                  <img src={product.img} alt={product.title} />
                  <img
                    style={{
                      width: "15px",
                      display: yulduzlar[index] ? "none" : "block",
                    }}
                    onClick={() => handleClick(index)}
                    className="yulduz"
                    src={yulduz}
                    alt="Star"
                  />
                  <img
                    style={{
                      width: "15px",
                      display: yulduzlar[index] ? "block" : "none",
                    }}
                    className="yulduz_yon2"
                    src={yulduzYon}
                    alt="Star"
                  />
                  <h2>{product.h2}</h2>
                  <div className="hoverCard">
                    <h4>{product.title}</h4>
                    <p>{product.lorem}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default KatalogPage;
