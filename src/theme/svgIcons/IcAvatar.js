import * as React from 'react';
import Svg, { Defs, LinearGradient, Stop, Path, Circle } from "react-native-svg"
import { size } from '../Size';

export const Avatar = props => {
  return (
    <Svg
      width={props.width ?? size.moderateScale(30)}
      height={props.height ?? size.moderateScale(30)}
      viewBox="0 0 1024 1024"
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M512.173.117C229.338.117.237 229.337.237 512.052c0 174.128 86.931 327.934 219.773 420.418v-.004l-.004-.004.091-.3a292.496 292.496 0 0110.949-31.267l.191-.471a275.875 275.875 0 013.633-8.245 274.445 274.445 0 015.058-10.544c.633-1.25 1.292-2.488 1.941-3.725a266.216 266.216 0 013.708-6.895c.717-1.279 1.48-2.52 2.217-3.787a280.252 280.252 0 016.595-10.736c1.133-1.758 2.258-3.525 3.433-5.25 1.108-1.637 2.258-3.232 3.395-4.84a284.852 284.852 0 017.282-9.808c.83-1.058 1.65-2.12 2.492-3.17l.266-341.449h.067c-.075-2.437-.183-4.861-.183-7.32 0-.437.029-.866.033-1.303C268.366 329.6 412.07 236.82 512.227 243.623c102.15-6.928 249.827 89.43 241.324 248.352l-.234.13.263 341.527c.646.809 1.287 1.63 1.925 2.446a265.743 265.743 0 014.078 5.34c1.104 1.476 2.18 2.98 3.254 4.48 1.296 1.808 2.587 3.612 3.837 5.457 1.117 1.646 2.183 3.329 3.27 5.004a277.965 277.965 0 015.612 9.049c1.163 1.958 2.333 3.903 3.446 5.89.987 1.763 1.929 3.558 2.879 5.341a294.261 294.261 0 013.028 5.812 290.063 290.063 0 015.6 11.836c.72 1.608 1.45 3.208 2.137 4.833a284.534 284.534 0 013.941 9.803c.237.62.496 1.229.733 1.85 1.5 4.02 2.9 8.099 4.237 12.219.334 1.029.638 2.07.958 3.104.65 2.083 1.325 4.145 1.934 6.253a.57.57 0 01-.084.054v.004c132.8-92.488 219.735-246.264 219.735-420.35.004-282.72-229.213-511.94-511.927-511.94z"
        fill="#F4B3B3"
      />
      <Path
        d="M276.207 827.129a277.49 277.49 0 018.065-9.061c.23-.25.471-.48.7-.725a278.123 278.123 0 018.074-8.22c.838-.812 1.696-1.612 2.542-2.416a264.97 264.97 0 019.54-8.687c.404-.35.796-.708 1.204-1.058v.054c23.551-20.185 50.69-36.629 80.79-48.69a313.406 313.406 0 0124.222-8.557c.717-.22 1.425-.45 2.146-.666a326.459 326.459 0 0126.884-6.833c.995-.212 2.004-.396 3.008-.596a344.402 344.402 0 0114.64-2.608 355.76 355.76 0 0110.323-1.437c1.27-.158 2.533-.337 3.816-.483a361.53 361.53 0 0114.148-1.354h26.035v-.117l-.175.004c-130.663 0-236.962-103.987-240.845-233.712h-.067l-.266 341.449c.737-.917 1.5-1.813 2.25-2.717.987-1.183 1.962-2.391 2.966-3.57z"
        fill="#FECF77"
      />
      <Path
        d="M512.173 725.688l.175-.005c130.48-.091 236.624-103.878 240.661-233.4-64.013 39.254-230.504-18.197-280.19-105.62-46.423 81.357-125.063 153.36-201.437 105.317-.158-2.913-.15-5.754-.204-8.624 0 .433-.033.866-.033 1.304 0 2.454.112 4.882.183 7.32 3.879 129.72 110.182 233.708 240.845 233.708z"
        fill="#FCE9EA"
      />
      <Path
        d="M472.815 386.664c49.686 87.422 216.177 144.869 280.19 105.62-4.037 129.525-110.178 233.308-240.661 233.4v.116h25.688c4.754.354 9.453.82 14.123 1.35 1.33.154 2.646.337 3.967.5 3.387.429 6.753.891 10.094 1.408a335.6 335.6 0 0114.382 2.55c1.191.237 2.387.454 3.57.708a326.417 326.417 0 0126.342 6.682c1.155.346 2.292.721 3.438 1.08a313.335 313.335 0 0113.315 4.461 313.95 313.95 0 018.76 3.32c30.026 11.874 57.127 28.08 80.687 48.007v-.07c.541.454 1.054.937 1.591 1.395a292.32 292.32 0 014.683 4.112 288.95 288.95 0 014.403 4.066c1.546 1.45 3.092 2.887 4.6 4.37 1.441 1.417 2.837 2.871 4.245 4.32a272.39 272.39 0 017.712 8.254c1.295 1.441 2.6 2.866 3.862 4.337 1.45 1.687 2.853 3.416 4.262 5.14.5.613 1.02 1.217 1.52 1.838l-.262-341.528.233-.129c8.503-158.921-139.174-255.28-241.324-248.352h.059c8.349 29.563-8.303 88.41-39.479 143.045z"
        fill="#FCBA6F"
      />
      <Path
        d="M784.913 882.447zm5.6 11.84c.72 1.608 1.445 3.208 2.137 4.833-.687-1.625-1.416-3.225-2.137-4.833zm-20.56-37.928zm-504.799-15.37zm497.687 4.908c1.296 1.809 2.587 3.613 3.837 5.458-1.245-1.845-2.541-3.65-3.837-5.458zm16.165 25.401c.987 1.763 1.929 3.558 2.879 5.341-.95-1.787-1.888-3.578-2.88-5.34zm17.585 37.625c.238.62.496 1.229.733 1.85-.237-.621-.495-1.23-.733-1.85zm-79.881-113.06c-23.56-19.928-50.66-36.138-80.686-48.007l.737.287V882.16H385.46V748.989c.55-.225 1.112-.438 1.666-.658-30.104 12.06-57.238 28.504-80.79 48.69v183.818a512.102 512.102 0 01-86.322-48.37v.005c82.844 57.672 183.527 91.518 292.159 91.518 81.456 0 158.447-19.06 226.817-52.91a509.352 509.352 0 01-22.28 10.294V795.862zm-458.888 55.38c1.108-1.638 2.258-3.233 3.395-4.841-1.137 1.608-2.287 3.207-3.395 4.84zm481.376 119.73a511.394 511.394 0 0065.176-38.57v-.004a512.294 512.294 0 01-65.176 38.574zm62.36-47.981c.333 1.029.637 2.07.957 3.104-.316-1.034-.62-2.075-.958-3.104zm-46.05-86.914zm-535.407 96.084zm16.236-43.157zm11.46-21.777zm-16.555 33.196zm10.632-22.51c1.216-2.316 2.433-4.624 3.708-6.895-1.28 2.267-2.492 4.579-3.708 6.895zm43.098-60.567c-.229.246-.47.475-.7.725.23-.25.471-.483.7-.725zm8.074-8.22c.838-.812 1.696-1.612 2.542-2.416-.846.804-1.704 1.604-2.542 2.416zm104.75-64.846zm-121.59 82.848c-1.003 1.179-1.978 2.387-2.961 3.579.983-1.192 1.958-2.4 2.962-3.579zm164.172-94.85c.995-.213 2.004-.396 3.008-.596-1 .2-2.013.383-3.008.595zm27.967-4.642c1.27-.158 2.533-.337 3.816-.483-1.283.146-2.545.325-3.816.483zm-56.997 12.136c.717-.22 1.425-.45 2.146-.666-.721.216-1.43.45-2.146.666zm42.624-10.044zm-148.844 68.295zm422.26 7.345c1.54 1.45 3.09 2.887 4.599 4.37-1.508-1.483-3.054-2.924-4.6-4.37zM610.514 739c1.154.345 2.295.72 3.437 1.078-1.146-.358-2.283-.733-3.437-1.079zm12.71 4.107zm99.759 58.197zM552.155 727.15c1.33.154 2.646.337 3.967.5-1.321-.163-2.633-.346-3.967-.5zm28.443 4.458c1.191.237 2.387.454 3.57.708-1.179-.25-2.379-.47-3.57-.708zm163.337 90.705zm-177.719-93.255zm185.847 102.733c-1.412-1.725-2.816-3.454-4.261-5.141 1.445 1.687 2.85 3.416 4.261 5.14z"
        fill="#A0D9F6"
      />
      <Path
        d="M623.226 743.106a321.797 321.797 0 00-9.274-3.033c-1.142-.358-2.283-.733-3.437-1.079a330.404 330.404 0 00-26.343-6.682c-1.183-.254-2.379-.471-3.57-.708a322.884 322.884 0 00-14.382-2.55 372.432 372.432 0 00-10.094-1.408c-1.321-.163-2.637-.346-3.966-.5a368.462 368.462 0 00-14.124-1.35h-51.722a361.53 361.53 0 00-14.149 1.354c-1.279.146-2.54.325-3.816.483a355.763 355.763 0 00-14.373 2.092c-3.558.6-7.087 1.25-10.59 1.954-1 .2-2.008.383-3.008.595a326.459 326.459 0 00-26.884 6.833c-.721.216-1.43.446-2.146.666a322.276 322.276 0 00-13.548 4.508 313.406 313.406 0 00-10.674 4.05c-.554.22-1.116.433-1.666.658v133.17H636.76V748.144l-.737-.287a322.314 322.314 0 00-12.798-4.75zM512.052 849.093a15.231 15.231 0 11-.004-30.467 15.231 15.231 0 01.004 30.467zm0-55.151a15.236 15.236 0 110-30.476 15.236 15.236 0 010 30.476zm-205.72 3.078v-.054c-.408.35-.8.708-1.204 1.058a272.032 272.032 0 00-9.54 8.687c-.846.804-1.704 1.604-2.542 2.416a278.123 278.123 0 00-8.074 8.22c-.229.246-.47.475-.7.725a277.49 277.49 0 00-8.065 9.061c-1.004 1.18-1.98 2.387-2.962 3.579-.75.908-1.513 1.804-2.25 2.716-.842 1.05-1.662 2.112-2.491 3.17a284.852 284.852 0 00-7.283 9.808c-1.141 1.608-2.291 3.208-3.395 4.84-1.175 1.726-2.296 3.492-3.433 5.25a278.236 278.236 0 00-6.595 10.736c-.737 1.267-1.496 2.512-2.216 3.787-1.275 2.27-2.492 4.583-3.708 6.895-.65 1.238-1.304 2.475-1.942 3.725a280.181 280.181 0 00-3.595 7.37c-.496 1.054-.975 2.112-1.462 3.174a287.03 287.03 0 00-3.633 8.245l-.192.47a291.584 291.584 0 00-10.949 31.268c-.029.1-.066.2-.091.3l.004.004a511.81 511.81 0 0086.322 48.369V797.02zm498.12 135.33c-.608-2.109-1.282-4.171-1.932-6.254-.321-1.034-.625-2.075-.959-3.104a289.255 289.255 0 00-4.237-12.22c-.237-.62-.495-1.228-.733-1.85a296.833 296.833 0 00-3.941-9.802c-.692-1.629-1.416-3.225-2.137-4.833a265.354 265.354 0 00-8.628-17.648c-.954-1.787-1.892-3.578-2.88-5.34-1.116-1.992-2.282-3.933-3.444-5.891a277.965 277.965 0 00-5.612-9.05c-1.088-1.674-2.158-3.361-3.27-5.003a261.863 261.863 0 00-3.838-5.458 254.393 254.393 0 00-7.332-9.82 275.915 275.915 0 00-1.925-2.445c-.5-.62-1.02-1.224-1.52-1.837-1.413-1.725-2.817-3.454-4.262-5.14-1.263-1.472-2.567-2.896-3.863-4.338a267.516 267.516 0 00-7.711-8.253c-1.408-1.45-2.804-2.904-4.245-4.32-1.504-1.48-3.054-2.92-4.6-4.37a313.915 313.915 0 00-4.403-4.067 292.321 292.321 0 00-4.683-4.112c-.538-.458-1.05-.941-1.592-1.395v185.576a509.352 509.352 0 0022.49-10.394 512.494 512.494 0 0065.174-38.575l.084-.058z"
        fill="#FEFEFE"
      />
      <Path
        d="M496.81600000000003 778.71a15.236 15.236 0 1030.472 0 15.236 15.236 0 10-30.472 0zM496.821 833.857a15.231 15.231 0 1030.462 0 15.231 15.231 0 10-30.462 0z"
        fill="#A0D9F6"
      />
      <Path
        d="M271.378 491.975c76.374 48.044 155.014-23.959 201.437-105.315 31.171-54.631 47.823-113.478 39.475-143.037h-.059c-100.162-6.799-243.865 85.981-241.053 239.729.05 2.87.046 5.715.2 8.623z"
        fill="#FECF77"
      />
    </Svg>
  );
};


