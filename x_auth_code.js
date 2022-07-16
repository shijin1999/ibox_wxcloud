var uint8Array = Uint8Array;
var uint32Array = Uint32Array;
var pow = Math['pow'];
var DEFAULT_STATE = new uint32Array(0x88cd5 ^ 0x88cdd);
var ROUND_CONSTANTS = [];
var M = new uint32Array(0x22e6c ^ 0x22e2c);

function getFractionalBits(_0x24b642) {
    return (_0x24b642 - (_0x24b642 | 0xc93b4 ^ 0xc93b4)) * pow(0x99f85 ^ 0x99f87, 0x6ca8d ^ 0x6caad) | 0xcd214 ^ 0xcd214;
}
var n = 0x85d37 ^ 0x85d35,
    nPrime = 0x7e0c8 ^ 0x7e0c8;
while (nPrime < (0x66e0b ^ 0x66e4b)) {
    var isPrime = !![];
    for (var factor = 0x6ff0c ^ 0x6ff0e; factor <= n / 0x2; factor++) {
        if (n % factor === 0x0) {
            isPrime = ![];
        }
    }
    if (isPrime) {
        if (nPrime < (0x2f811 ^ 0x2f819)) {
            DEFAULT_STATE[nPrime] = getFractionalBits(pow(n, 0x1 / 0x2));
        }
        ROUND_CONSTANTS[nPrime] = getFractionalBits(pow(n, 0x1 / 0x3));
        nPrime++;
    }
    n++;
}
var LittleEndian = !!new uint8Array(new uint32Array([0x1])['buffer'])[0x0];

function convertEndian(_0x10bef4) {
    if (LittleEndian) {
        return _0x10bef4 >>> (0x43409 ^ 0x43411) | (_0x10bef4 >>> 0x10 & 0xff) << 0x8 | (_0x10bef4 & (0x7cb42 ^ 0x73442)) << (0xd9bf4 ^ 0xd9bfc) | _0x10bef4 << 0x18;
    } else {
        return _0x10bef4;
    }
}

function rightRotate(_0x52aef9, _0x232029) {
    return _0x52aef9 >>> _0x232029 | _0x52aef9 << 0x20 - _0x232029;
}

function sha256(_0x300458) {
    var _0x570d84 = DEFAULT_STATE['slice']();
    var _0x126f23 = _0x300458['length'];
    var _0x256907 = _0x126f23 * (0xcebee ^ 0xcebe6);
    var _0x5043cf = (0x89f02 ^ 0x89d02) - (_0x256907 + (0xbfa7b ^ 0xbfa3b)) % 0x200 - 0x1 + _0x256907 + 0x41;
    var _0xee095d = new uint8Array(_0x5043cf / (0x5c0df ^ 0x5c0d7));
    var _0x2c245a = new uint32Array(_0xee095d['buffer']);
    _0xee095d['set'](_0x300458, 0x0);
    _0xee095d[_0x126f23] = 0x494dd ^ 0x4945d;
    _0x2c245a[_0x2c245a['length'] - 0x1] = convertEndian(_0x256907);
    var _0x2cd27d;
    for (var _0x431d12 = 0x0; _0x431d12 < _0x5043cf / 0x20; _0x431d12 += 0x7b2e5 ^ 0x7b2f5) {
        var _0x42b1e7 = _0x570d84['slice']();
        for (_0x2cd27d = 0x0; _0x2cd27d < 0x40; _0x2cd27d++) {
            var _0x5b3f2c;
            if (_0x2cd27d < 0x10) {
                _0x5b3f2c = convertEndian(_0x2c245a[_0x431d12 + _0x2cd27d]);
            } else {
                var _0x3b6e90 = M[_0x2cd27d - 0xf];
                var _0x11e691 = M[_0x2cd27d - 0x2];
                _0x5b3f2c = M[_0x2cd27d - (0x19cc0 ^ 0x19cc7)] + M[_0x2cd27d - 0x10] + (rightRotate(_0x3b6e90, 0x8acac ^ 0x8acab) ^ rightRotate(_0x3b6e90, 0x12) ^ _0x3b6e90 >>> 0x3) + (rightRotate(_0x11e691, 0x11) ^ rightRotate(_0x11e691, 0x13) ^ _0x11e691 >>> 0xa);
            }
            M[_0x2cd27d] = _0x5b3f2c |= 0x0;
            var _0x2db3c8 = (rightRotate(_0x42b1e7[0x393c0 ^ 0x393c4], 0x6) ^ rightRotate(_0x42b1e7[0xf0ac8 ^ 0xf0acc], 0xb) ^ rightRotate(_0x42b1e7[0x4], 0xeb3f4 ^ 0xeb3ed)) + (_0x42b1e7[0xe4dbb ^ 0xe4dbf] & _0x42b1e7[0xe2d10 ^ 0xe2d15] ^ ~_0x42b1e7[0x4] & _0x42b1e7[0x6]) + _0x42b1e7[0x7] + _0x5b3f2c + ROUND_CONSTANTS[_0x2cd27d];
            var _0x156bd2 = (rightRotate(_0x42b1e7[0x0], 0x2) ^ rightRotate(_0x42b1e7[0x0], 0xb70f2 ^ 0xb70ff) ^ rightRotate(_0x42b1e7[0xa2477 ^ 0xa2477], 0x16)) + (_0x42b1e7[0x0] & _0x42b1e7[0x1] ^ _0x42b1e7[0x694df ^ 0x694dd] & (_0x42b1e7[0xd055d ^ 0xd055d] ^ _0x42b1e7[0x4f62f ^ 0x4f62e]));
            for (var _0x5a7af2 = 0xc3aee ^ 0xc3ae9; _0x5a7af2 > (0xf06fc ^ 0xf06fc); _0x5a7af2--) {
                _0x42b1e7[_0x5a7af2] = _0x42b1e7[_0x5a7af2 - 0x1];
            }
            _0x42b1e7[0x0] = _0x2db3c8 + _0x156bd2 | 0x65875 ^ 0x65875;
            _0x42b1e7[0x97982 ^ 0x97986] = _0x42b1e7[0x5d710 ^ 0x5d714] + _0x2db3c8 | 0xd214d ^ 0xd214d;
        }
        for (_0x2cd27d = 0x325b5 ^ 0x325b5; _0x2cd27d < 0x8; _0x2cd27d++) {
            _0x570d84[_0x2cd27d] = _0x570d84[_0x2cd27d] + _0x42b1e7[_0x2cd27d] | 0x50766 ^ 0x50766;
        }
    }
    return new uint8Array(new uint32Array(_0x570d84['map'](function (_0x1b61a8) {
        return convertEndian(_0x1b61a8);
    }))['buffer']);
}

function hmac(_0x423be0, _0x46e972) {
    if (_0x423be0['length'] > 0x40) _0x423be0 = sha256(_0x423be0);
    if (_0x423be0['length'] < (0x6068a ^ 0x606ca)) {
        const _0x283e50 = new Uint8Array(0x40);
        _0x283e50['set'](_0x423be0, 0x0);
        _0x423be0 = _0x283e50;
    }
    var _0x4f1bc6 = new Uint8Array(0x40);
    var _0xd8ca9d = new Uint8Array(0x40);
    for (var _0x625f88 = 0xce35f ^ 0xce35f; _0x625f88 < 0x40; _0x625f88++) {
        _0x4f1bc6[_0x625f88] = 0x3d171 ^ 0x3d147 ^ _0x423be0[_0x625f88];
        _0xd8ca9d[_0x625f88] = 0x99d6d ^ 0x99d31 ^ _0x423be0[_0x625f88];
    }
    var _0xa8df37 = new Uint8Array(_0x46e972['length'] + 0x40);
    _0xa8df37['set'](_0x4f1bc6, 0x0);
    _0xa8df37['set'](_0x46e972, 0x666f6 ^ 0x666b6);
    var _0x1fb131 = new Uint8Array(0x40 + 0x20);
    _0x1fb131['set'](_0xd8ca9d, 0x0);
    _0x1fb131['set'](sha256(_0xa8df37), 0x40);
    return sha256(_0x1fb131);
}
const encoder = new TextEncoder('utf-8');

function get_x_auth_code(_0x4e6556) {
    const _0x24611a = encoder['encode']('G@G9CCVWrhGxk');
    const _0x4acfd9 = typeof _0x4e6556 === 'string' ? encoder['encode'](_0x4e6556) : _0x4e6556;
    var _0x40309c = Buffer['from'](hex(hmac(_0x24611a, _0x4acfd9)), 'hex')['toString']('base64');
    return _0x40309c;
}

function hex(_0x3d3d07) {
    return _0x3d3d07['reduce']((_0x29c24e, _0x42829a) => _0x29c24e + ('00' + _0x42829a['toString'](0x10))['substr'](-0x2), '');
}

function main() {
    var callid = '3304171205-1656494124155-F333D';
    console['log'](get_x_auth_code(callid));
}
setImmediate(main);
