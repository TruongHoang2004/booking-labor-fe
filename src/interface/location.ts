export interface District {
    name: string;
    code: string;
    division_type: string;
    codename: string;
    province_code: string;
  }
  
export  interface HanoiResponse {
    name: string;
    code: string;
    division_type: string;
    codename: string;
    phone_code: number;
    districts: District[];
  }

  export interface Ward {
    name: string,
    code: number,
    division_type: string,
    codename: string,
    district_code: number;
  }

