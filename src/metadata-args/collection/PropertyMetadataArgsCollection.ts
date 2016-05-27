import {TargetMetadataArgsCollection} from "./TargetMetadataArgsCollection";

export class PropertyMetadataArgsCollection<T extends { target?: Function, propertyName?: string }> extends TargetMetadataArgsCollection<T>  {

    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------

    filterRepeatedMetadatas(existsMetadatas: T[]): this {
        return this.filter(metadata => {
            return !existsMetadatas.find(fieldFromDocument => fieldFromDocument.propertyName === metadata.propertyName);
        });
    }

    findByProperty(propertyName: string) {
        return this.find(item => item.propertyName === propertyName);
    }

    hasWithProperty(propertyName: string) {
        return !!this.findByProperty(propertyName);
    }

}