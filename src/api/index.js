import axios from 'axios';
import crypto from 'crypto';

const TS = 6400;
const PROTOCOL = 'http';
const PUBLIC_KEY = "1a679ed26908b921178e6fc92449051b";
const PRIVATE_KEY = "cd93fdde5532680e2bbe2f0a7a9ec2a8f9afea44";
const BASE_URL = 'gateway.marvel.com'

const hash = crypto.createHash('md5').update(TS + PRIVATE_KEY + PUBLIC_KEY).digest('hex');
export const PARAMS = `?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${hash}`;

export function getHeroes() {
  const END_POINT = '/v1/public/characters'
  return axios({ url: `${PROTOCOL}://${BASE_URL}${END_POINT}${PARAMS}`, method: 'GET' });
}

export function getComics() {
  const END_POINT = '/v1/public/comics'
  return axios({ url: `${PROTOCOL}://${BASE_URL}${END_POINT}${PARAMS}`, method: 'GET' });
}

export function getEvents() {
  const END_POINT = '/v1/public/events'
  return axios({ url: `${PROTOCOL}://${BASE_URL}${END_POINT}${PARAMS}`, method: 'GET' });

}
