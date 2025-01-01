export interface SideBySide {
    title?: string;
    description?: string;
    image?: string;
    video?: string;
    //template SydeBySide permette due opzioni, 
    //una con info(title e description), altra con form contatti
    info?: boolean;
    form?: boolean;
  }