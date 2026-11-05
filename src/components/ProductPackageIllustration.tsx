import React from 'react';
import { ProductSKU } from '../data/agrixentrisData';

interface Props {
  product: ProductSKU;
  size?: 'sm' | 'md' | 'lg';
}

export const ProductPackageIllustration: React.FC<Props> = ({ product, size = 'md' }) => {
  const scaleClass =
    size === 'sm' ? 'w-28 h-32' : size === 'lg' ? 'w-48 h-56' : 'w-36 h-44';

  return (
    <div className={`relative ${scaleClass} flex items-center justify-center select-none`}>
      {product.packageType === 'seed-pouch' && (
        <svg viewBox="0 0 160 200" className="w-full h-full drop-shadow-md" aria-hidden="true">
          {/* Foil Pouch Body */}
          <path
            d="M28 20 H132 L140 182 C140 188 135 192 128 192 H32 C25 192 20 188 20 182 Z"
            fill="#F7F2E7"
            stroke="#2D3819"
            strokeWidth="2.5"
          />
          {/* Top Heat Seal */}
          <rect x="26" y="12" width="108" height="14" rx="3" fill={product.accentColor} stroke="#2D3819" strokeWidth="2" />
          <line x1="34" y1="19" x2="126" y2="19" stroke="#FAF6F1" strokeWidth="1.5" strokeDasharray="4 3" />
          {/* Center Band */}
          <rect x="24" y="54" width="112" height="82" fill={product.accentColor} />
          {/* AgriXentris Crest Circle */}
          <circle cx="80" cy="54" r="18" fill="#FAF6F1" stroke="#2D3819" strokeWidth="2" />
          <path d="M80 41 L84 52 L80 63 L76 52 Z" fill="#4C5520" />
          <path d="M80 58 C72 54 68 48 68 44 C74 46 78 50 80 58 Z" fill="#6B8E23" />
          <path d="M80 58 C88 54 92 48 92 44 C86 46 82 50 80 58 Z" fill="#6B8E23" />
          {/* Label Typography */}
          <text x="80" y="85" textAnchor="middle" fill="#FAF6F1" fontSize="7.5" fontWeight="700" letterSpacing="1.1">
            AGRIXENTRIS
          </text>
          <text x="80" y="102" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="700">
            {product.shortTitle}
          </text>
          <text x="80" y="118" textAnchor="middle" fill="#F0E5D7" fontSize="8" fontFamily="monospace">
            {product.sku}
          </text>
          {/* Bottom Specs */}
          <text x="80" y="160" textAnchor="middle" fill="#2D3819" fontSize="8.5" fontWeight="600">
            BENIH HIBRIDA F1
          </text>
          <text x="80" y="176" textAnchor="middle" fill="#4C5520" fontSize="7.5" fontFamily="monospace">
            DAYA TUMBUH &ge;92%
          </text>
        </svg>
      )}

      {product.packageType === 'nutrient-twin' && (
        <svg viewBox="0 0 180 200" className="w-full h-full drop-shadow-md" aria-hidden="true">
          {/* Jerrycan A */}
          <g transform="translate(12, 24)">
            <rect x="20" y="4" width="22" height="12" rx="2" fill="#D95338" stroke="#2D3819" strokeWidth="2" />
            <path
              d="M10 24 C10 18 16 14 24 14 H56 C68 14 74 22 74 34 V148 C74 155 69 160 62 160 H18 C11 160 6 155 6 148 V34 C6 28 8 25 10 24 Z"
              fill="#FAF6F1"
              stroke="#2D3819"
              strokeWidth="2.5"
            />
            <rect x="48" y="24" width="16" height="28" rx="5" fill="#E5D5C0" stroke="#2D3819" strokeWidth="2" />
            <rect x="6" y="64" width="68" height="66" fill="#2E6F40" />
            <text x="40" y="88" textAnchor="middle" fill="#FAF6F1" fontSize="16" fontWeight="700">
              A
            </text>
            <text x="40" y="104" textAnchor="middle" fill="#FAF6F1" fontSize="7.5" fontWeight="600">
              STOK KALSIUM
            </text>
            <text x="40" y="118" textAnchor="middle" fill="#EADDCC" fontSize="7" fontFamily="monospace">
              5 LITER
            </text>
          </g>
          {/* Jerrycan B */}
          <g transform="translate(90, 32)">
            <rect x="20" y="4" width="22" height="12" rx="2" fill="#4C5520" stroke="#2D3819" strokeWidth="2" />
            <path
              d="M10 24 C10 18 16 14 24 14 H56 C68 14 74 22 74 34 V144 C74 151 69 156 62 156 H18 C11 156 6 151 6 144 V34 C6 28 8 25 10 24 Z"
              fill="#F0E5D7"
              stroke="#2D3819"
              strokeWidth="2.5"
            />
            <rect x="48" y="24" width="16" height="28" rx="5" fill="#FAF6F1" stroke="#2D3819" strokeWidth="2" />
            <rect x="6" y="64" width="68" height="64" fill="#1E3A2B" />
            <text x="40" y="88" textAnchor="middle" fill="#FAF6F1" fontSize="16" fontWeight="700">
              B
            </text>
            <text x="40" y="104" textAnchor="middle" fill="#FAF6F1" fontSize="7.5" fontWeight="600">
              MIKRO LENGKAP
            </text>
            <text x="40" y="118" textAnchor="middle" fill="#EADDCC" fontSize="7" fontFamily="monospace">
              5 LITER
            </text>
          </g>
        </svg>
      )}

      {product.packageType === 'organic-sack' && (
        <svg viewBox="0 0 160 200" className="w-full h-full drop-shadow-md" aria-hidden="true">
          {/* Woven Sack */}
          <path
            d="M24 22 L34 16 L126 16 L136 22 L140 176 L130 186 L30 186 L20 176 Z"
            fill="#EADDCC"
            stroke="#2D3819"
            strokeWidth="2.5"
          />
          <line x1="28" y1="26" x2="132" y2="26" stroke="#7A542E" strokeWidth="2" strokeDasharray="5 3" />
          <rect x="22" y="56" width="116" height="84" fill="#4C5520" />
          <circle cx="80" cy="56" r="16" fill="#FAF6F1" stroke="#2D3819" strokeWidth="2" />
          <path d="M80 45 L85 56 L80 65 L75 56 Z" fill="#4C5520" />
          <text x="80" y="88" textAnchor="middle" fill="#FAF6F1" fontSize="9" fontWeight="700" letterSpacing="1">
            BIO-KASGOT BSF
          </text>
          <text x="80" y="106" textAnchor="middle" fill="#EADDCC" fontSize="8" fontWeight="600">
            PUPUK ORGANIK SUPER
          </text>
          <text x="80" y="124" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="700">
            NETTO 25 KG
          </text>
          <text x="80" y="164" textAnchor="middle" fill="#2D3819" fontSize="8" fontFamily="monospace">
            C/N 14:1 · TRICHODERMA
          </text>
        </svg>
      )}

      {product.packageType === 'baglog-bundle' && (
        <svg viewBox="0 0 180 200" className="w-full h-full drop-shadow-md" aria-hidden="true">
          {/* Three Stacked Cylindrical Baglogs */}
          <g transform="translate(20, 32)">
            <rect x="8" y="20" width="54" height="128" rx="14" fill="#F7F2E7" stroke="#2D3819" strokeWidth="2.5" />
            <ellipse cx="35" cy="24" rx="14" ry="6" fill="#8C6239" stroke="#2D3819" strokeWidth="2" />
            <rect x="8" y="64" width="54" height="42" fill="#4C5520" />
            <text x="35" y="84" textAnchor="middle" fill="#FAF6F1" fontSize="8" fontWeight="700">
              BAGLOG F2
            </text>
            <text x="35" y="96" textAnchor="middle" fill="#EADDCC" fontSize="7" fontFamily="monospace">
              1,3 KG
            </text>
          </g>
          <g transform="translate(84, 38)">
            <rect x="8" y="20" width="54" height="128" rx="14" fill="#FAF6F1" stroke="#2D3819" strokeWidth="2.5" />
            <ellipse cx="35" cy="24" rx="14" ry="6" fill="#D95338" stroke="#2D3819" strokeWidth="2" />
            <rect x="8" y="64" width="54" height="42" fill="#1E3A2B" />
            <text x="35" y="84" textAnchor="middle" fill="#FAF6F1" fontSize="8" fontWeight="700">
              50 BAGLOG
            </text>
            <text x="35" y="96" textAnchor="middle" fill="#EADDCC" fontSize="7" fontFamily="monospace">
              SIAP PANEN
            </text>
          </g>
        </svg>
      )}

      {product.packageType === 'drip-kit' && (
        <svg viewBox="0 0 180 200" className="w-full h-full drop-shadow-md" aria-hidden="true">
          {/* PE Pipe Coil */}
          <circle cx="90" cy="96" r="64" fill="none" stroke="#1E3A2B" strokeWidth="14" />
          <circle cx="90" cy="96" r="52" fill="none" stroke="#2E6F40" strokeWidth="8" />
          {/* Center Spec Badge */}
          <rect x="34" y="66" width="112" height="64" rx="8" fill="#FAF6F1" stroke="#2D3819" strokeWidth="2.5" />
          <text x="90" y="86" textAnchor="middle" fill="#1E3A2B" fontSize="8.5" fontWeight="700" letterSpacing="0.8">
            SMART DRIP KIT
          </text>
          <text x="90" y="104" textAnchor="middle" fill="#D95338" fontSize="11" fontWeight="700" fontFamily="monospace">
            1.000 M² LAHAN
          </text>
          <text x="90" y="120" textAnchor="middle" fill="#4C5520" fontSize="7.5" fontFamily="monospace">
            1.200 TITIK + VENTURI
          </text>
        </svg>
      )}

      {product.packageType === 'iot-node' && (
        <svg viewBox="0 0 170 200" className="w-full h-full drop-shadow-md" aria-hidden="true">
          {/* Antenna */}
          <line x1="122" y1="16" x2="122" y2="44" stroke="#2D3819" strokeWidth="4" strokeLinecap="round" />
          <circle cx="122" cy="14" r="4" fill="#D95338" />
          {/* IP65 Enclosure */}
          <rect x="26" y="40" width="118" height="114" rx="10" fill="#FAF6F1" stroke="#2D3819" strokeWidth="2.5" />
          {/* OLED Screen */}
          <rect x="40" y="54" width="90" height="52" rx="4" fill="#1E3A2B" />
          <text x="48" y="72" fill="#A7F3D0" fontSize="8" fontFamily="monospace">
            EC: 2.4 mS  pH: 6.1
          </text>
          <text x="48" y="86" fill="#FDE68A" fontSize="8" fontFamily="monospace">
            RH: 78%     T: 26.4C
          </text>
          <text x="48" y="99" fill="#FAF6F1" fontSize="7" fontFamily="monospace">
            NODE: AXN-GH-007
          </text>
          {/* Label Strip */}
          <rect x="40" y="116" width="90" height="24" rx="4" fill="#4C5520" />
          <text x="85" y="131" textAnchor="middle" fill="#FAF6F1" fontSize="8" fontWeight="700" letterSpacing="0.8">
            IOT TELEMETRY
          </text>
          {/* Soil Probe Prongs */}
          <line x1="65" y1="154" x2="65" y2="188" stroke="#4C5520" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="85" y1="154" x2="85" y2="188" stroke="#4C5520" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="105" y1="154" x2="105" y2="188" stroke="#4C5520" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      )}
    </div>
  );
};
