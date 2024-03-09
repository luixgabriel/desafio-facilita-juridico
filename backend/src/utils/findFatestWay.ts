import { Client } from "../entities/Client";

interface Coordinate {
    x: number;
    y: number;
}

function calcDistance(coord1: Coordinate, coord2: Coordinate): number {
    const dx = coord1.x - coord2.x;
    const dy = coord1.y - coord2.y;
    const total = Math.sqrt(dx * dx + dy * dy);
    return total;
}

function findCloserClient(clients: Client[], actualPosition: Coordinate): Client | null {
    let closerDistance = Infinity;
    let closerClient: Client | null = null;

    for (let i = 0; i < clients.length; i++) {
        const distance = calcDistance({ x: clients[i].coordx, y: clients[i].coordy }, actualPosition);
        if (distance < closerDistance) {
            closerDistance = distance;
            closerClient = clients[i];
        }
    }

    return closerClient;
}

function calcRoute(clients: Client[]) {
    const route: Client[] = [];
    let actualPosition = { x: 0, y: 0 };

    while (clients.length > 0) {
        const closerClient: Client | null = findCloserClient(clients, actualPosition);
        route.push(closerClient as Client);
        clients.splice(clients.indexOf(closerClient as Client), 1);
        actualPosition = {x: closerClient?.coordx as number, y:closerClient?.coordy as number};
    }

    route.push({
        id: '0',
        name: "Sede",
        email: "sede@gmail.com",
        telephone: "00000000",
        coordx: 0,
        coordy: 0
    }); // Retornando à empresa
    return route;
}

export {calcDistance, findCloserClient, calcRoute}