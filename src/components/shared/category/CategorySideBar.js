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
        <SideWrapper>
            {categories?.map(category => (
                <Category key={category._id} active={category._id === activeId}
                          onClick={() => dispatch(setActiveCategory(category._id))}>
                    <div>{category.name}</div>
                </Category>
            ))}
        </SideWrapper>
    );
};

export default CategorySideBar;