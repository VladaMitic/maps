/// <reference types="@types/google.maps" />
import {User} from './User';
import { Company } from './Company';
import { CostumMap } from "./CostumMap";

const user = new User();
const company = new Company()
const costomMap = new CostumMap('map');

costomMap.addMarker(user);
costomMap.addMarker(company);