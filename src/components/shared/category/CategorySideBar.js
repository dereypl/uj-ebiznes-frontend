import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CategoryService from "../../../services/CategoryService";
import {getCategoriesStateRoot, setActiveCategory} from "../../../store/reducers/categories";
import {Category, SideWrapper} from "./CategorySideBar.styles";

const CategorySideBar = () => {
    const dispatch = useDispatch();
    const {list: {items: categories}, activeId} = useSelector(getCategoriesStateRoot)

    useEffect(() => {
        dispatch(CategoryService.fetchAll())
    }, [dispatch]);

    return (
        <SideWrapper data-id={'category-sidebar'}>
            {categories?.map(category => (
                <Category key={category.id} active={category.id === activeId}
                          onClick={() => dispatch(setActiveCategory(category.id))}>
                    <div>{category.name}</div>
                </Category>
            ))}
        </SideWrapper>
    );
};

export default CategorySideBar;