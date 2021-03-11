import React from 'react';
import SkillsItem from './SkillsItem';
import SkillsCategory from "./SkillsCategory";
import titleToLabel from "../common/core/tags";

const SkillsList = (props) => {
    const sortedItems = props.items.sort((a, b) => b.level - a.level);
    const slicedItems = props.count ? sortedItems.slice(0, props.count) : sortedItems;
    const category = SkillsCategory[props.category];
    return (
        <div className="skills-list">
            <h2 className={`skills-title ${titleToLabel(category)}`}>{category}</h2>
            {slicedItems.map((item) =>
                <SkillsItem
                    label={item.label}
                    level={item.level}
                    mention={item.mention}
                    type={item.type}
                    key={item.label}
                    category={item.category}
                />)}
        </div>);
}

export default SkillsList;