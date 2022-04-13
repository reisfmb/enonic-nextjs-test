import {APP_NAME} from '../_enonicAdapter/utils'
import {ComponentRegistry, CATCH_ALL} from '../_enonicAdapter/ComponentRegistry';

// Queries
import {commonQuery, commonVariables} from './queries/common';
import getPerson from './queries/getPerson';

// Pages
import MainPage from './pages/Main';

// Views
import PropsView from './views/Props';
import Person from './views/Person';

// Parts
import Heading from './parts/Heading';
import ChildList, {childListProcessor, getChildList} from './parts/ChildList';
import MovieDetails, {getMovie} from './parts/MovieDetails';

// Layouts
import TwoColumnLayout from './layouts/TwoColumnLayout';

// ---

// You can set common query for all views here
ComponentRegistry.setCommonQuery([commonQuery, commonVariables]);


// Content type mappings
ComponentRegistry.addContentType(`${APP_NAME}:person`, {
    query: getPerson,
    view: Person
});


// Page mappings
ComponentRegistry.addPage(`${APP_NAME}:default`, {
    view: MainPage
});


// Layout mappings
ComponentRegistry.addLayout(`${APP_NAME}:2-column`, {
    view: TwoColumnLayout
});

// Part mappings
ComponentRegistry.addPart(`${APP_NAME}:heading`, {
    view: Heading
});

ComponentRegistry.addPart(`${APP_NAME}:child-list`, {
    query: getChildList,
    processor: childListProcessor,
    view: ChildList
});

ComponentRegistry.addPart(`${APP_NAME}:movie-details`, {
    query: getMovie,
    view: MovieDetails
});

/* // Debug
ComponentRegistry.addContentType(CATCH_ALL, {
    view: PropsView
});
 */