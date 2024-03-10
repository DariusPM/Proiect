import React, { useState } from "react";
import items from "../helpers/Menulist";
import Categories from "../components/Categories";
import MenuItem from "../components/Menuitem";

import "../styles/Menu.css";

const firstCategories = [
  "meniu",
  ...new Set(items.map((item) => item.category)),
];

const Menu = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("meniu");
  const [categories] = useState(firstCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "meniu") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Meniul zilei</h2>
          <div className="underline"></div>
          <h3>
            Ți-am pregătit cu mare drag un meniu al zilei care să te ajute să te
            bucuri de bunătăţi sănătoase cât mai variate în fiecare zi.
            Pregătind zilnic alt meniu, iți oferim diversitate, echilibru
            nutritiv și desigur, multă iubire – iar asta se simte şi cu inima şi
            cu papilele gustativ!
          </h3>
          <h3>Pret:35lei</h3>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <MenuItem items={menuItems} />
      </section>
    </main>
  );
};

export default Menu;
